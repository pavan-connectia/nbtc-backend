const mongoose = require("mongoose");

const mailingListDeptSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default: "contactus",
    enum: ["careers", "contactus", "quote"],
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CoreBusiness",
  },
});

const MailingListDept = mongoose.model(
  "MailingListDept",
  mailingListDeptSchema,
);
module.exports = MailingListDept;
