"use strict";

var mongoose = require("mongoose");
var qualificationSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true
  },
  name: {
    en: {
      type: String,
      required: true
    },
    ar: {
      type: String,
      required: true
    }
  }
});
var Qualification = mongoose.model("QualificationLocation", qualificationSchema);
module.exports = Qualification;