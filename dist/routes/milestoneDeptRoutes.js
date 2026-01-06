"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/milestonesDeptController"),
  createMilestonesDeptController = _require.createMilestonesDeptController,
  getAllMilestonesDeptController = _require.getAllMilestonesDeptController,
  getMilestonesDeptByDepartment = _require.getMilestonesDeptByDepartment,
  getMilestonesDeptByIdController = _require.getMilestonesDeptByIdController,
  updateMilestonesDeptController = _require.updateMilestonesDeptController,
  deleteMilestonesDeptController = _require.deleteMilestonesDeptController;
var _require2 = require("../middleware/auth"),
  protect = _require2.protect,
  authorize = _require2.authorize;
var middleware = [protect, authorize("superadmin", "admin", "user")];
router.get("/", getAllMilestonesDeptController);
router.get("/department/:id", getMilestonesDeptByDepartment);
router.post("/", middleware, createMilestonesDeptController);
router.get("/:id", middleware, getMilestonesDeptByIdController);
router.patch("/:id", middleware, updateMilestonesDeptController);
router["delete"]("/:id", middleware, deleteMilestonesDeptController);
module.exports = router;