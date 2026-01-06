const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
  name: {
    en: { type: String, required: true },
    ar: { type: String, required: true },
  },
  designation: {
    en: { type: String, required: true },
    ar: { type: String, required: true },
  },
  message: {
    en: { type: String, required: true },
    ar: { type: String, required: true },
  },
  index: {
    type: Number,
  },
  display: {
    type: Boolean,
    default: true,
  },
});

testimonialSchema.pre("save", async function (next) {
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

const Testimonial = mongoose.model("Testimonial", testimonialSchema);
module.exports = Testimonial;
