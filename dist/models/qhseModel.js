"use strict";

var mongoose = require("mongoose");
var qhseSchema = new mongoose.Schema({
  quality: {
    image: String,
    description: {
      en: String,
      ar: String
    }
  }
});
var Qhse = mongoose.model("Qhse", qhseSchema);
module.exports = Qhse;