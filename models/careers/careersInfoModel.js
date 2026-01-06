const mongoose = require("mongoose");

const careersInfoSchema = mongoose.Schema({
  importNoticeImage: {
    type: String,
    required: true,
  },
  heading: {
    en: {
      type: String,
      required: true,
    },
    ar: String,
  },
  description: {
    en: {
      type: String,
      required: true,
    },
    ar: String,
  },
});

const CareersInfo = mongoose.model("CareersInfo", careersInfoSchema);

module.exports = CareersInfo;
