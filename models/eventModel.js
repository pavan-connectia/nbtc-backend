const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: { en: String, ar: String },
  description: { en: String, ar: String },
  learnMore: String,
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
