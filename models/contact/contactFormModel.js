const mongoose = require("mongoose");

const contactFormSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
    },
    subject: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    department: {
      ref: "CoreBusiness",
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);

const CareersForm = mongoose.model("CareersForm", contactFormSchema);

module.exports = CareersForm;
