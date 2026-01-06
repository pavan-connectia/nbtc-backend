const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CoreBusiness",
  },
  title: {
    en: {
      type: String,
      required: true,
    },
    ar: String,
  },
  location: {
    en: {
      type: String,
      required: true,
    },
    ar: String,
  },
  description: {
    en: {
      type: String,
      required: true,
    },
    ar: String,
  },
  type: {
    type: String,
    enum: ["featured", "ongoing", "all"],
  },
  region: {
    type: String,
    enum: ["kuwait", "ksa", "auh"],
  },
  seo: {
    title: String,
    metaDescription: String,
    metaKeywords: String,
    ogImage: String,
    ogUrl: String,
    canonicalUrl: String,
  },
  display: {
    type: Boolean,
    default: true,
  },
  index: {
    type: Number,
  },
});

projectsSchema.pre("save", async function (next) {
  if (!this.index && this.isNew) {
    const lastOrder = await this.constructor.findOne(
      {},
      {},
      { sort: { index: -1 } },
    );
    this.index = lastOrder ? lastOrder.index + 1 : 0;
  }
  next();
});

const Projects = mongoose.model("Projects", projectsSchema);

module.exports = Projects;
