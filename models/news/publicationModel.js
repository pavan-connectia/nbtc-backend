const mongoose = require("mongoose");

const publicationSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    index: true,
  },
  date: {
    type: String,
    required: true,
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CoreBusiness",
  },
  pdf: String,
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
  },
});

publicationSchema.pre("save", async function (next) {
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

const Publication = mongoose.model("Publication", publicationSchema);

module.exports = Publication;
