const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Assignment = new Schema(
  {
    assignmentTitle: { type: String, required: true },
    cohorts: { type: Array, required: false },
    desc: { type: String, required: false },
    deckLink: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('assignment', Assignment);
