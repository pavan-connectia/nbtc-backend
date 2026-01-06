const express = require("express");
const router = express.Router();
const {
  createMilestonesDeptController,
  getAllMilestonesDeptController,
  getMilestonesDeptByDepartment,
  getMilestonesDeptByIdController,
  updateMilestonesDeptController,
  deleteMilestonesDeptController,
} = require("../controllers/milestonesDeptController");
const { protect, authorize } = require("../middleware/auth");

const middleware = [protect, authorize("superadmin", "admin", "user")];

router.get("/", getAllMilestonesDeptController);
router.get("/department/:id", getMilestonesDeptByDepartment);
router.post("/", middleware, createMilestonesDeptController);
router.get("/:id", middleware, getMilestonesDeptByIdController);
router.patch("/:id", middleware, updateMilestonesDeptController);
router.delete("/:id", middleware, deleteMilestonesDeptController);

module.exports = router;
