"use strict";

var mongoose = require("mongoose");
var mailingListSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    "default": "contactus",
    "enum": ["careers", "contactus", "quote"]
  }
});
var MailingList = mongoose.model("MailingList", mailingListSchema);
module.exports = MailingList;