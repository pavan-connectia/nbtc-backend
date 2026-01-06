"use strict";

var mongoose = require("mongoose");
var aboutusDeptSchema = new mongoose.Schema({
  profile: {
    description: {
      en: {
        type: String,
        required: true
      },
      ar: {
        type: String,
        required: true
      }
    },
    description2: {
      en: {
        type: String
      },
      ar: {
        type: String
      }
    },
    description3: {
      en: {
        type: String
      },
      ar: {
        type: String
      }
    },
    image: String,
    image2: String,
    quote: {
      en: String,
      ar: String
    }
  },
  chairmanMsg: {
    quote: {
      en: String,
      ar: String
    },
    image: String,
    message: {
      en: String,
      ar: String
    },
    name: {
      en: String,
      ar: String
    },
    smallQuote: {
      en: String,
      ar: String
    }
  },
  mdMsg: {
    quote: {
      en: String,
      ar: String
    },
    image: String,
    message: {
      en: String,
      ar: String
    },
    name: {
      en: String,
      ar: String
    },
    smallQuote: {
      en: String,
      ar: String
    }
  },
  management: [{
    name: {
      en: {
        type: String,
        required: true
      },
      ar: {
        type: String,
        required: true
      }
    },
    image: {
      required: true,
      type: String
    },
    designation: {
      en: {
        type: String,
        required: true
      },
      ar: {
        type: String,
        required: true
      }
    }
  }],
  department: {
    ref: "CoreBusiness",
    type: mongoose.Schema.Types.ObjectId
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
var AboutusDept = mongoose.model("AboutusDept", aboutusDeptSchema);
module.exports = AboutusDept;