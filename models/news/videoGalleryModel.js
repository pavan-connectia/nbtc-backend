const mongoose = require("mongoose");

const videoGallerySchema = new mongoose.Schema({
  video: {
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

videoGallerySchema.pre("save", async function (next) {
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

const VideoGallery = mongoose.model("VideoGallery", videoGallerySchema);

module.exports = VideoGallery;
