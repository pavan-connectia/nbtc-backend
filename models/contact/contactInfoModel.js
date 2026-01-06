const mongoose = require("mongoose");

const contactInfoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  postalAddress: {
    type: String,
  },
  physcialAddress: {
    type: String,
  },
  phone: [String],
  fax: {
    type: String,
  },
  email: {
    type: String,
  },
  website: {
    type: String,
  },
  coords: [Number],
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
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

contactInfoSchema.pre("save", async function (next) {
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

const ContactInfo = mongoose.model("ContactInfo", contactInfoSchema);

module.exports = ContactInfo;
