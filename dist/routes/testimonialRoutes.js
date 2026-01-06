"use strict";

var express = require("express");
var _require = require("../controllers/testimonialController"),
  createTestimonialController = _require.createTestimonialController,
  getAllTestimonialController = _require.getAllTestimonialController,
  getTestimonialByIdController = _require.getTestimonialByIdController,
  updateTestimonialController = _require.updateTestimonialController,
  deleteTestimonialController = _require.deleteTestimonialController;
var router = express.Router();
router.post("/", createTestimonialController);
router.get("/", getAllTestimonialController);
router.get("/:id", getTestimonialByIdController);
router.patch("/:id", updateTestimonialController);
router["delete"]("/:id", deleteTestimonialController);
module.exports = router;