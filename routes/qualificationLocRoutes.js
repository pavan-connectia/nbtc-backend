const express = require("express");
const router = express.Router();
const {
  createQualificationLocController,
  getAllQualificationLocController,
  getQualificationLocByIdController,
  updateQualificationLocController,
  deleteQualificationLocController,
} = require("../controllers/qualificationLocationController");
const { protect, authorize } = require("../middleware/auth");

const middleware = [protect, authorize("superadmin")];

router.get("/", getAllQualificationLocController);
router.post("/", middleware, createQualificationLocController);
router.get("/:id", middleware, getQualificationLocByIdController);
router.patch("/:id", middleware, updateQualificationLocController);
router.delete("/:id", middleware, deleteQualificationLocController);

module.exports = router;
