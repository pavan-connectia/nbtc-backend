const mongoose = require("mongoose");
const qualificationSchema = new mongoose.Schema({
  description: {
    en: { type: String, required: true },
    ar: { type: String, required: true },
  },
});

const Qualification = mongoose.model("Qualification", qualificationSchema);
module.exports = Qualification;
