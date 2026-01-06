"use strict";

var express = require("express");
var _require = require("../controllers/regionController"),
  createRegion = _require.createRegion,
  getAllRegion = _require.getAllRegion,
  getRegionByRegion = _require.getRegionByRegion,
  getRegionById = _require.getRegionById,
  updateRegion = _require.updateRegion,
  deleteRegion = _require.deleteRegion;
var _require2 = require("../middleware/auth"),
  protect = _require2.protect,
  authorize = _require2.authorize;
var router = express.Router();
var middleware = [protect, authorize("superadmin")];
router.get("/region-info/", getAllRegion);
router.get("/region-info/region/:id", getRegionByRegion);
router.post("/region-info/", middleware, createRegion);
router.patch("/region-info/:id", middleware, updateRegion);
router["delete"]("/region-info/:id", middleware, deleteRegion);
router.get("/region-info/:id", getRegionById);
module.exports = router;