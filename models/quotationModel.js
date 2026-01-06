const mongoose = require("mongoose");

const quotationRequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: { type: String, required: true },
  email: {
    type: String,
    required: true,
  },
  message: { type: String, required: true },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CoreBusiness",
  },
  company: {
    type: String,
    required: true
  },
  pdf: String,
  site:{
    type: String,
    required: true
  }
});

const QuotationRequest = mongoose.model(
  "QuotationRequest",
  quotationRequestSchema,
);

module.exports = QuotationRequest;
