const express = require('express');

const DiscussionCtrl = require('../controllers/discussionController');

const discussionRouter = express.Router();

discussionRouter.post('/discussion', DiscussionCtrl.createDiscussion);
discussionRouter.get('/discussions', DiscussionCtrl.getDiscussions);
discussionRouter.get(
  '/discussions/:cohortId',
  DiscussionCtrl.getDiscussionsByCohort
);
discussionRouter.put('/discussion/:id', DiscussionCtrl.updateDiscussion);
discussionRouter.delete('/discussion/:id', DiscussionCtrl.deleteDiscussion);

module.exports = discussionRouter;
