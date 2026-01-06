const mongoose = require("mongoose");

const qhseSchema = new mongoose.Schema({
  quality: {
    image: String,
    description: {
      en: String,
      ar: String,
    },
  },
});

const Qhse = mongoose.model("Qhse", qhseSchema);
module.exports = Qhse;
