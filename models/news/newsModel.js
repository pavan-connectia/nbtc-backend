const mongoose = require("mongoose");
const slugify = require("../../utils/slugify");

const newsSchema = new mongoose.Schema({
  href: {
    type: String,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  location: {
    en: {
      type: String,
      required: true,
    },
    ar: String,
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
  images: [String],
  seo: {
    title: String,
    metaDescription: String,
    metaKeywords: String,
    ogImage: String,
    ogUrl: String,
    canonicalUrl: String,
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
});

newsSchema.pre("save", async function (next) {
  if (!this.href || this.isModified("title.en")) {
    let slug = slugify(this.title.en);

    const existingDoc = await this.constructor.findOne({ href: slug });
    if (existingDoc && existingDoc._id.toString() !== this._id.toString()) {
      slug = `${slug}-${Date.now()}`;
    }

    this.href = slug;
  }

  next();
});

newsSchema.pre("findOneAndUpdate", async function (next) {
  const update = this.getUpdate();

  if (update.title?.en) {
    let slug = slugify(update.title.en);

    const existingDoc = await this.model.findOne({ href: slug });
    if (
      existingDoc &&
      existingDoc._id.toString() !== this.getQuery()._id?.toString()
    ) {
      slug = `${slug}-${Date.now()}`;
    }

    update.href = slug;
    this.setUpdate(update);
  }

  next();
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
