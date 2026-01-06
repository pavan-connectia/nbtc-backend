"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/facilityController"),
  createFacilityController = _require.createFacilityController,
  getAllFacilityController = _require.getAllFacilityController,
  getFacilityByIdController = _require.getFacilityByIdController,
  getFacilityByDepartmentId = _require.getFacilityByDepartmentId,
  updateFacilityController = _require.updateFacilityController,
  deleteFacilityController = _require.deleteFacilityController;
var _require2 = require("../middleware/auth"),
  protect = _require2.protect,
  checkDepartmentAccess = _require2.checkDepartmentAccess;
var middleware = [protect, checkDepartmentAccess];
router.get("/", getAllFacilityController);
router.post("/", middleware, createFacilityController);
router.get("/:id", getFacilityByIdController);
router.get("/department/:id", getFacilityByDepartmentId);
router.patch("/:id", middleware, updateFacilityController);
router["delete"]("/:id", middleware, deleteFacilityController);
module.exports = router;