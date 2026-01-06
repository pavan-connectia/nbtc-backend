const express = require("express");
const {
  createTestimonialController,
  getAllTestimonialController,
  getTestimonialByIdController,
  updateTestimonialController,
  deleteTestimonialController,
} = require("../controllers/testimonialController");

const router = express.Router();

router.post("/", createTestimonialController);
router.get("/", getAllTestimonialController);
router.get("/:id", getTestimonialByIdController);
router.patch("/:id", updateTestimonialController);
router.delete("/:id", deleteTestimonialController);

module.exports = router;
