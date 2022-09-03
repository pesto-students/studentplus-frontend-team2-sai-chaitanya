const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Student = new Schema(
  {
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    displayName: { type: String, required: false },
    url: { type: String, required: false },
    about: { type: String, required: false },
    phone: { type: String, required: false },
    language: { type: String, required: false },
    state: { type: String, required: false },
    city: { type: String, required: false },
    streetAddr: { type: String, required: false },
    country: { type: String, required: false },
    img: { type: String, required: false },
    password: { type: String, required: true },
    isActive: { type: Boolean, required: false },
    isDeffered: { type: Boolean, required: false },
    Assignment: { type: Object, required: false },
    Attendance: { type: Object, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('students', Student);
