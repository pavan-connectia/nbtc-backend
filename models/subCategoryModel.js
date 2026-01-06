const mongoose = require("mongoose");
const slugify = require("../utils/slugify");

const subCategorySchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: {
    en: { type: String, required: true },
    ar: String,
  },
  description: {
    en: { type: String, required: true },
    ar: String,
  },
  href: { type: String, unique: true },
  specification: [
    {
      label: { en: String, ar: String },
      value: { en: String, ar: String },
    },
  ],
  photos: [String],
  pdf: String,
  seo: {
    title: String,
    metaDescription: String,
    metaKeywords: String,
    ogImage: String,
    ogUrl: String,
    canonicalUrl: String,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  department: { ref: "CoreBusiness", type: mongoose.Schema.Types.ObjectId },
  featured: { type: Boolean, default: false },
  popular: { type: Boolean, default: false },
  display: { type: Boolean, default: true },
  index: { type: Number },
});

async function generateUniqueHref(name, model, currentId = null) {
  let baseSlug = slugify(name);
  let uniqueSlug = baseSlug;
  let counter = 1;

  while (await model.findOne({ href: uniqueSlug, _id: { $ne: currentId } })) {
    uniqueSlug = `${baseSlug}-${counter}`;
    counter++;
  }

  return uniqueSlug;
}

subCategorySchema.pre("save", async function (next) {
  if (!this.href && this.name && this.name.en) {
    this.href = await generateUniqueHref(this.name.en, this.constructor);
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

subCategorySchema.pre("findOneAndUpdate", async function (next) {
  const update = this.getUpdate();

  if (update.name?.en) {
    const currentDoc = await this.model.findOne(this.getQuery());
    update.href = await generateUniqueHref(
      update.name.en,
      this.model,
      currentDoc?._id
    );
  }

  this.setUpdate(update);
  next();
});

const SubCategory = mongoose.model("SubCategory", subCategorySchema);
module.exports = SubCategory;
