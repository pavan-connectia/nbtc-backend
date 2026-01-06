"use strict";

var mongoose = require("mongoose");
var servicesSchema = new mongoose.Schema({
  image: String,
  title: {
    en: {
      type: String,
      required: true
    },
    ar: String
  },
  description: {
    en: String,
    ar: String
  },
  photos: [String],
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CoreBusiness"
  },
  display: {
    type: Boolean,
    "default": true
  },
  index: {
    type: Number
  }
});
var Facility = mongoose.model("Facility", servicesSchema);
module.exports = Facility;