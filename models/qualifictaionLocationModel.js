const mongoose = require("mongoose");
const qualificationSchema = new mongoose.Schema({
  key: { type: String, required: true },
  name: {
    en: { type: String, required: true },
    ar: { type: String, required: true },
  },
});

const Qualification = mongoose.model(
  "QualificationLocation",
  qualificationSchema,
);
module.exports = Qualification;
