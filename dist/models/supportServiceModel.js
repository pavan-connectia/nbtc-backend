"use strict";

var mongoose = require("mongoose");
var supportServiceSchema = mongoose.Schema({
  adminHr: {
    subHeading: {
      en: String,
      ar: String
    },
    features: [{
      image: String,
      title: {
        en: String,
        ar: String
      },
      description: {
        en: String,
        ar: String
      }
    }]
  },
  finaceAccoutns: {
    en: String,
    ar: String
  },
  materialManagement: {
    image: String,
    description: {
      en: String,
      ar: String
    }
  },
  bist: {
    en: String,
    ar: String
  },
  grc: {
    en: String,
    ar: String
  },
  seo: {
    title: String,
    metaDescription: String,
    metaKeywords: String,
    ogImage: String,
    ogUrl: String,
    canonicalUrl: String
  }
});
var SupportService = mongoose.model("SupportService", supportServiceSchema);
module.exports = SupportService;