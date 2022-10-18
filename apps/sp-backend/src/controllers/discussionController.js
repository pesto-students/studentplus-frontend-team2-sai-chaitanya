const Discussion = require('../models/discussionModel');
const asyncHandler = require('express-async-handler');
const { ObjectId } = require('mongodb');

createDiscussion = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide discussion data',
    });
  }

  const discussion = new Discussion(body);

  if (!discussion) {
    return res.status(400).json({ success: false, error: err });
  }

  discussion
    .save()
    .then(() => {
      return res.status(200).json({
        success: true,
        message: 'Discussion created!',
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: 'Discussion not created!',
      });
    });
};

updateDiscussion = asyncHandler(async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    });
  }
  const discussion = await Discussion.findById({ _id: ObjectId(req.params.id) });
  if (!discussion) {
    return res.status(400).json({ success: false, error: err });
  }

  discussion.discussionTitle = body.discussionTitle;
  discussion.cohorts = body.cohorts;
  discussion.boardDesc = body.boardDesc;
  discussion.deckLink = body.deckLink;
  discussion.assignments = body.assignments;
  discussion
    .save()
    .then(() => {
      return res.status(200).json({
        success: true,
        id: discussion._id,
        message: 'Discussion updated!',
      });
    })
    .catch((error) => {
      return res.status(404).json({
        error,
        message: 'Discussion not updated!',
      });
    });
});

getDiscussions = asyncHandler(async (req, res) => {
  const discussions = await Discussion.find({});
  res.json(discussions);
});

deleteDiscussion = async (req, res) => {
  const response = await Discussion.findOneAndDelete({ _id: ObjectId(req.params.id) });
  res.json(response);
};

getDiscussionsByCohort = asyncHandler(async (req, res) => {
	const query = { cohorts: req.params.cohortId };
  const discussions = await Discussion.find(query);
  res.json(discussions);
});

module.exports = {
  createDiscussion,
  updateDiscussion,
  getDiscussions,
  deleteDiscussion,
  getDiscussionsByCohort,
};
