"use strict";

var mongoose = require("mongoose");
var qualificationSchema = new mongoose.Schema({
  description: {
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
var Qualification = mongoose.model("Qualification", qualificationSchema);
module.exports = Qualification;