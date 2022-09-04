const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Event = new Schema(
  {
    eventTitle: { type: String, required: true },
    cohorts: { type: Array, required: true },
    eventLink: { type: String, required: true },
    password: { type: String, required: false },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    docSource: { type: String, required: false },
    description: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('event', Event);
