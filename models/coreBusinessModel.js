const mongoose = require("mongoose");
const slugify = require("../utils/slugify");

const coreBusinessSchema = mongoose.Schema({
  name: {
    en: {
      type: String,
      required: true,
    },
    ar: {
      type: String,
      required: true,
    },
  },
  learnMore: String,
  description: {
    en: {
      type: String,
      required: true,
    },
    ar: {
      type: String,
      required: true,
    },
  },
  mainDescription: {
    en: String,
    ar: String,
  },
  photos: [String],
  href: {
    type: String,
    trim: true,
  },
  banner: {
    type: String,
    required: true,
  },
  seo: {
    title: String,
    metaDescription: String,
    metaKeywords: String,
    ogImage: String,
    ogUrl: String,
    canonicalUrl: String,
  },
  hasSubDomain: {
    type: Boolean,
    default: false,
  },
  displayProjects: {
    type: Boolean,
    default: true,
  },
  displayCoreBusiness: {
    type: Boolean,
    default: true,
  },
  index: {
    type: Number,
  },
});

coreBusinessSchema.pre("save", async function (next) {
  if (!this.href && this.name && this.name.en) {
    this.href = slugify(this.name.en);
  }

  if (!this.index && this.isNew) {
    const lastOrder = await this.constructor.findOne(
      {},
      {},
      { sort: { index: -1 } }
    );
    this.index = lastOrder ? lastOrder.index + 1 : 0;
  }

  next();
});

coreBusinessSchema.pre("findOneAndUpdate", async function (next) {
  const update = this.getUpdate();
  if (update.name?.en) {
    update.href = slugify(update.name.en);
  }
  this.setUpdate(update);
  next();
});

const CoreBusiness = mongoose.model("CoreBusiness", coreBusinessSchema);
module.exports = CoreBusiness;
