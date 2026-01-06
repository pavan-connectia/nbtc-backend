const mongoose = require("mongoose");
const afflicatesSchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { en: { type: String, required: true }, ar: { type: String } },
  description: { en: { type: String, required: true }, ar: { type: String } },
  link: String,
  index: {
    type: Number,
  },
  display: {
    type: Boolean,
    default: true,
  },
});

afflicatesSchema.pre("save", async function (next) {
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

const Afflicates = mongoose.model("Afflicates", afflicatesSchema);
module.exports = Afflicates;
