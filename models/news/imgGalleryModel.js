const mongoose = require("mongoose");

const imgGallerySchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    en: {
      type: String,
      required: true,
    },
    ar: String,
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CoreBusiness",
  },
  showInMain: {
    type: Boolean,
    default: false,
  },
  requested: {
    type: Boolean,
    default: false,
  },
  display: {
    type: Boolean,
    default: true,
  },
  index: {
    type: Number,
    index: true,
  },
});

imgGallerySchema.pre("save", async function (next) {
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

const ImgGallery = mongoose.model("ImgGallery", imgGallerySchema);

module.exports = ImgGallery;
