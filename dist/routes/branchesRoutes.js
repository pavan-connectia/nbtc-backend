"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/branchesController"),
  createBranchesController = _require.createBranchesController,
  getAllBranchesController = _require.getAllBranchesController,
  getBranchesByNameController = _require.getBranchesByNameController,
  updateBranchesController = _require.updateBranchesController,
  deleteBranchesController = _require.deleteBranchesController;
var _require2 = require("../middleware/auth"),
  protect = _require2.protect,
  authorize = _require2.authorize;
var middleware = [protect, authorize("superadmin")];
router.get("/", middleware, getAllBranchesController);
router.post("/", middleware, createBranchesController);
router.get("/:name", getBranchesByNameController);
router.patch("/:id", middleware, updateBranchesController);
router["delete"]("/:id", middleware, deleteBranchesController);
module.exports = router;