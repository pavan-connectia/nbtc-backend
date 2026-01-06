const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  heroType: {
    type: String,
    enum: ["video", "image", "slider"],
    default: "image",
  },
  video: String,
  slider: [
    {
      image: String,
      heading: { en: String, ar: String },
      description: { en: String, ar: String },
      learnMore: String,
    },
  ],
  banner: String,
  heading: { en: String, ar: String },
  description: { en: String, ar: String },
  learnMore: String,
  statistics: [{ number: String, text: { en: String, ar: String } }],
  journey: { en: String, ar: String },
  mission: { en: String, ar: String },
  value: { en: String, ar: String },
  vision: { en: String, ar: String },
  facebookLink: String,
  youtubeLink: String,
  twitterLink: String,
  instagramLink: String,
  linkedInLink: String,
  companyAddress: [{ title: { en: String, ar: String }, href: String }],
  companyPhones: [{ title: String, href: String }],
  companyEmail: [{ title: String, href: String }],
  seo: {
    title: String,
    metaDescription: String,
    metaKeywords: String,
    ogImage: String,
    ogUrl: String,
    canonicalUrl: String,
  },
});

const Home = mongoose.model("Home", homeSchema);
module.exports = Home;
