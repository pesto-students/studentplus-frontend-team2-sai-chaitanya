const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cohort = new Schema(
  {
    cohortId: { type: String, required: true },
    cohortType: { type: String, required: false },
    assignments: { type: Array, required: false },
    students: { type: Array, required: false },
    events: { type: Array, required: false },
    discussions: { type: Array, required: false },
    statrtAt: { type: String, required: false },
    endAt: { type: String, required: false },
    programManager: { type: String, required: false },
    phone: { type: String, required: false },
    status: { type: String, required: false },
    studentCount: { type: String, required: false },
    activeStudentCount: { type: String, required: false },
    deferredStudentCount: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('cohort', Cohort);
