const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema({
  image: String,
  title: {
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
  photos: [String],
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CoreBusiness",
  },
  display: { type: Boolean, default: true },
  index: { type: Number },
});

const Services = mongoose.model("Services", servicesSchema);
module.exports = Services;
