const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cohort = new Schema(
  {
    cohortId: { type: String, required: true },
    programType: { type: String, required: false },
    url: { type: String, required: false },
    sdate: { type: String, required: false },
    edate: { type: String, required: false },
    students: { type: Array, required: false },
    programManager: { type: String, required: false },
    phone: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('cohort', Cohort);
