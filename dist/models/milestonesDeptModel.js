"use strict";

var mongoose = require("mongoose");
var milestoneDeptSchema = new mongoose.Schema({
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
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CoreBusiness"
  },
  display: {
    type: Boolean,
    "default": true
  }
});
var MilestoneDept = mongoose.model("MilestoneDept", milestoneDeptSchema);
module.exports = MilestoneDept;