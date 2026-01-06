"use strict";

var mongoose = require("mongoose");
var eventSchema = new mongoose.Schema({
  title: {
    en: String,
    ar: String
  },
  description: {
    en: String,
    ar: String
  },
  learnMore: String
});
var Event = mongoose.model("Event", eventSchema);
module.exports = Event;