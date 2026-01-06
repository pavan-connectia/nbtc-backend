const express = require("express");
const router = express.Router();
const {
  createAfflicatesController,
  getAllAfflicatesController,
  getAfflicatesByIdController,
  updateAfflicatesController,
  deleteAfflicatesController,
} = require("../controllers/afflicatesController");
const { protect, authorize } = require("../middleware/auth");

const middleware = [protect, authorize("superadmin")];

router.get("/", getAllAfflicatesController);
router.post("/", middleware, createAfflicatesController);
router.get("/:id", middleware, getAfflicatesByIdController);
router.patch("/:id", middleware, updateAfflicatesController);
router.delete("/:id", middleware, deleteAfflicatesController);

module.exports = router;
