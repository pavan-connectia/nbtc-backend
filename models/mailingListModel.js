const mongoose = require("mongoose");

const mailingListSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default: "contactus",
    enum: ["careers", "contactus", "quote"],
  },
});

const MailingList = mongoose.model("MailingList", mailingListSchema);
module.exports = MailingList;
