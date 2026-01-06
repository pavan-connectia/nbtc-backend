const mongoose = require("mongoose");
const slugify = require("../utils/slugify");

const categorySchema = new mongoose.Schema({
  image: String,
  name: {
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
  href: { type: String, unique: true },
  specification: [
    {
      label: { en: String, ar: String },
      value: { en: String, ar: String },
    },
  ],
  photos: [String],
  pdf:String,
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CoreBusiness",
  },
  featured: { type: Boolean, default: false },
  popular: { type: Boolean, default: false },
  display: { type: Boolean, default: true },
  index: { type: Number },
});

categorySchema.pre("save", async function (next) {
  if (!this.href && this.name && this.name.en) {
    this.href = slugify(this.name.en);
  }

  if (this.subcategories && this.subcategories.length > 0) {
    this.subcategories = this.subcategories.map((subcategory) => {
      if (!subcategory.href && subcategory.name && subcategory.name.en) {
        subcategory.href = slugify(subcategory.name.en);
      }
      return subcategory;
    });
  }

  next();
});

categorySchema.pre("findOneAndUpdate", async function (next) {
  const update = this.getUpdate();

  if (update.name?.en) {
    update.href = slugify(update.name.en);
  }

  if (update.subcategories && update.subcategories.length > 0) {
    update.subcategories = update.subcategories.map((subcategory) => {
      if (!subcategory.href && subcategory.name && subcategory.name.en) {
        subcategory.href = slugify(subcategory.name.en);
      }
      return subcategory;
    });
  }

  this.setUpdate(update);
  next();
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
