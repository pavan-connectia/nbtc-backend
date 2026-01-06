"use strict";

var mongoose = require("mongoose");
var aboutusSchema = new mongoose.Schema({
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
    image: String,
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
  }]
});
var Aboutus = mongoose.model("Aboutus", aboutusSchema);
module.exports = Aboutus;