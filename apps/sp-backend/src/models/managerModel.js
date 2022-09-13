const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Manager = new Schema(
  {
    email: { type: String, required: true },
    alternateId: { type: String, required: false },
    firstName: { type: String, required: true },
    cohort: { type: Array, required: true },
    lastName: { type: String, required: true },
    displayName: { type: String, required: false },
    url: { type: String, required: false },
    about: { type: String, required: false },
    phone: { type: Number, required: false },
    language: { type: String, required: false },
    state: { type: String, required: false },
    city: { type: String, required: false },
    streetAddr: { type: String, required: false },
    country: { type: String, required: false },
    img: { type: String, required: false },
    password: { type: String, required: true },
    // isActive: { type: Boolean, required: false },
    // isDeffered: { type: Boolean, required: false },
    // status:{ type: String, required:false},
    // assignment: { type: Array, required: false },
    // attendance: { type: Array, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('managers', Manager);
