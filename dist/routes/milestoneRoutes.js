"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/milestonesController"),
  createMilestonesController = _require.createMilestonesController,
  getAllMilestonesController = _require.getAllMilestonesController,
  getMilestonesByIdController = _require.getMilestonesByIdController,
  updateMilestonesController = _require.updateMilestonesController,
  deleteMilestonesController = _require.deleteMilestonesController;
var _require2 = require("../middleware/auth"),
  protect = _require2.protect,
  authorize = _require2.authorize;
var middleware = [protect, authorize("superadmin")];
router.get("/", getAllMilestonesController);
router.post("/", middleware, createMilestonesController);
router.get("/:id", middleware, getMilestonesByIdController);
router.patch("/:id", middleware, updateMilestonesController);
router["delete"]("/:id", middleware, deleteMilestonesController);
module.exports = router;