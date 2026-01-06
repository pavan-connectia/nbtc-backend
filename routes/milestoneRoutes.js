const express = require("express");
const router = express.Router();
const {
  createMilestonesController,
  getAllMilestonesController,
  getMilestonesByIdController,
  updateMilestonesController,
  deleteMilestonesController,
} = require("../controllers/milestonesController");
const { protect, authorize } = require("../middleware/auth");

const middleware = [protect, authorize("superadmin")];

router.get("/", getAllMilestonesController);
router.post("/", middleware, createMilestonesController);
router.get("/:id", middleware, getMilestonesByIdController);
router.patch("/:id", middleware, updateMilestonesController);
router.delete("/:id", middleware, deleteMilestonesController);

module.exports = router;
