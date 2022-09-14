const Comment = require('../models/commentModel');
const asyncHandler = require('express-async-handler');
const { ObjectId } = require('mongodb');

createComment = (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide comment data',
    });
  }

  const comment = new Comment(body);

  if (!comment) {
    return res.status(400).json({ success: false, error: err });
  }

  comment
    .save()
    .then(() => {
      return res.status(200).json({
        success: true,
        message: 'Comment created!',
        comment: comment,
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: 'Comment not created!',
      });
    });
};

getComments = asyncHandler(async (req, res) => {
 const query = { discussionId: req.params.discussionId };
 console.log(query);
 const comments = await Comment.find(query).sort({updatedAt:-1});
 console.log(comments);
  if (comments) {
    res.json(comments);
  } else {
    res.status(404).json({ message: 'comments not found' });
    res.status(404);
    throw new Error('comments not found');
  }
});

module.exports = {
  createComment,
  getComments,
};
