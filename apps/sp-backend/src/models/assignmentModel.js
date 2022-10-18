const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Assignment = new Schema(
  {
    assignmentTitle: { type: String, required: true },
    cohorts: { type: Array, required: false },
    desc: { type: String, required: false },
    fileLink: { type: String, required: false },
	  programWeek: {type: String, required:true},
    assignmentSNo: {type: String, required:true}
  },
  { timestamps: true }
);

module.exports = mongoose.model('assignment', Assignment);
