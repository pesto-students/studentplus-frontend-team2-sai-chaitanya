const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Discussion = new Schema(
  {
    discussionTitle: { type: String, required: true },
    cohorts: { type: Array, required: false },
    boardDesc: { type: String, required: false },
    deckLink: { type: String, required: false },
    assignments: { type: Array, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('discussion', Discussion);
