const mongoose = require("mongoose");

const careersOpeningSchema = mongoose.Schema({
  vacancy: {
    type: Number,
    required: true,
  },
  location: {
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
  title: {
    en: {
      type: String,
      required: true,
    },
    ar: String,
  },
  display: {
    type: Boolean,
    default: true,
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CoreBusiness",
  },
  startDate: {
    type: Date,
    required: true,
  },

  endDate: {
    type: Date,
    required: true,
  },
});

const CareersOpening = mongoose.model("CareersOpening", careersOpeningSchema);

module.exports = CareersOpening;
