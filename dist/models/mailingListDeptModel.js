"use strict";

var mongoose = require("mongoose");
var mailingListDeptSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    "default": "contactus",
    "enum": ["careers", "contactus", "quote"]
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CoreBusiness"
  }
});
var MailingListDept = mongoose.model("MailingListDept", mailingListDeptSchema);
module.exports = MailingListDept;