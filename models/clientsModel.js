const mongoose = require("mongoose");
const clientsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  index: {
    type: Number,
  },
  display: {
    type: Boolean,
    default: true,
  },
});

clientsSchema.pre("save", async function (next) {
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

const Clients = mongoose.model("Clients", clientsSchema);
module.exports = Clients;
