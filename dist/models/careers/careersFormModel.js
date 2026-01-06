"use strict";

var mongoose = require("mongoose");
var careersFormSchema = mongoose.Schema({
  selectedOpening: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "CareersOpening"
  },
  fName: {
    type: String,
    required: true
  },
  mName: String,
  lName: String,
  nationality: String,
  age: Number,
  gender: String,
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, "Please enter a valid email address"]
  },
  phone: {
    type: String,
    required: true
  },
  location: String,
  experience: String,
  eduQualification: String,
  techQualification: String,
  remarks: String,
  resume: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
var CareersForm = mongoose.model("Careers-Form", careersFormSchema);
module.exports = CareersForm;