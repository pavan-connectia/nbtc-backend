const mongoose = require("mongoose");
const awardsSchema = new mongoose.Schema({
  name: {
    en: { type: String, required: true },
    ar: String,
  },
  image: { type: String, required: true },
  type: {
    required: true,
    type: String,
    enum: ["quality", "hse", "recognition", "accredetions"],
  },
  department: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CoreBusiness",
    },
  ],
  seo: {
    title: String,
    metaDescription: String,
    metaKeywords: String,
    ogImage: String,
    ogUrl: String,
    canonicalUrl: String,
  },
  showInMain: {
    type: Boolean,
    default: false,
  },
  requested: {
    type: Boolean,
    default: false,
  },
  index: {
    type: Number,
  },
  display: {
    type: Boolean,
    default: true,
  },
});

awardsSchema.pre("save", async function (next) {
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

const Awards = mongoose.model("Awards", awardsSchema);
module.exports = Awards;
