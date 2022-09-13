const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema(
  {
    discussionId: { type: String, required: true },
    textMessage: { type: Array, required: false },
    user: { type: Object, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('comment', Comment);
