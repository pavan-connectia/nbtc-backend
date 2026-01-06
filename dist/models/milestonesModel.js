"use strict";

var mongoose = require("mongoose");
var milestoneSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  title: {
    en: String,
    ar: String
  },
  description: {
    en: {
      type: String,
      required: true
    },
    ar: String
  },
  display: {
    type: Boolean,
    "default": true
  }
});
var Milestone = mongoose.model("Milestone", milestoneSchema);
module.exports = Milestone;