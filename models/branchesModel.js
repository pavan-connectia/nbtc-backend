const mongoose = require("mongoose");
const slugify = require("../utils/slugify");

const branchesSchema = new mongoose.Schema({
  href: { type: String, unique: true },
  name: {
    en: {
      type: String,
      required: true,
    },
    ar: String,
  },
  image: String,
  facilities: {
    en: String,
    ar: String,
  },
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
  feautedProjects: [
    {
      image: String,
      title: {
        en: String,
        ar: String,
      },
      location: {
        en: String,
        ar: String,
      },
      description: {
        en: String,
        ar: String,
      },
    },
  ],
  display: { type: Boolean, default: false },
  index: Number,
});

branchesSchema.pre("save", async function (next) {
  if (!this.href && this.name && this.name.en) {
    this.href = slugify(this.name.en);
  }

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

branchesSchema.pre("findOneAndUpdate", async function (next) {
  const update = this.getUpdate();

  if (update.name?.en) {
    update.href = slugify(update.name.en);
  }

  this.setUpdate(update);
  next();
});

const Branches = mongoose.model("Branches", branchesSchema);
module.exports = Branches;
