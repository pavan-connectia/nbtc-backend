const mongoose = require("mongoose");

const csrSchema = new mongoose.Schema({
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
  description: {
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
  display: {
    type: Boolean,
    default: true,
  },
  index: {
    type: Number,
    index: true,
  },
});

csrSchema.pre("save", async function (next) {
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

const Csr = mongoose.model("Csr", csrSchema);

module.exports = Csr;
