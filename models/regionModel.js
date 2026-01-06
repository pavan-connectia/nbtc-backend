const mongoose = require("mongoose");

const branchesSchema = new mongoose.Schema({
  name: {
    en: {
      type: String,
      required: true,
    },
    ar: String,
  },
  href: { type: String, unique: true },
  image: String,
  description: {
    en: String,
    ar: String,
  },
  seo: {
    title: String,
    metaDescription: String,
    metaKeywords: String,
    ogImage: String,
    ogUrl: String,
    canonicalUrl: String,
  },
});

const Region = mongoose.model("Region", branchesSchema);
module.exports = Region;
