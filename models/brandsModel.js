const mongoose = require("mongoose");
const brandsSchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { en: { type: String, required: true }, ar: String },
  href: String,
  description: { en: String, ar: String },
  seo: {
    title: String,
    metaDescription: String,
    metaKeywords: String,
    ogImage: String,
    ogUrl: String,
    canonicalUrl: String,
  },
  index: {
    type: Number,
  },
  display: {
    type: Boolean,
    default: true,
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CoreBusiness",
  },
});

brandsSchema.pre("save", async function (next) {
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

const Brands = mongoose.model("Brands", brandsSchema);
module.exports = Brands;
