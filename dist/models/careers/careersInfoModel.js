"use strict";

var mongoose = require("mongoose");
var careersInfoSchema = mongoose.Schema({
  importNoticeImage: {
    type: String,
    required: true
  },
  heading: {
    en: {
      type: String,
      required: true
    },
    ar: String
  },
  description: {
    en: {
      type: String,
      required: true
    },
    ar: String
  }
});
var CareersInfo = mongoose.model("CareersInfo", careersInfoSchema);
module.exports = CareersInfo;