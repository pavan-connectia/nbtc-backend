const express = require("express");
const router = express.Router();
const {
  createQualificationController,
  getAllQualificationController,
  getQualificationByIdController,
  updateQualificationController,
  deleteQualificationController,
} = require("../controllers/qualificationController");
const { protect, authorize } = require("../middleware/auth");

const middleware = [protect, authorize("superadmin")];

router.get("/", getAllQualificationController);
router.post("/", middleware, createQualificationController);
router.get("/:id", middleware, getQualificationByIdController);
router.patch("/:id", middleware, updateQualificationController);
router.delete("/:id", middleware, deleteQualificationController);

module.exports = router;
