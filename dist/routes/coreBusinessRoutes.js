"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/coreBusinessControllers"),
  addCoreBusiness = _require.addCoreBusiness,
  editCoreBusiness = _require.editCoreBusiness,
  deleteCoreBusiness = _require.deleteCoreBusiness,
  getAllCoreBusinesses = _require.getAllCoreBusinesses,
  getCoreBusinessesById = _require.getCoreBusinessesById,
  getNavbarItems = _require.getNavbarItems,
  getCoreBusinessesByName = _require.getCoreBusinessesByName;
var _require2 = require("../middleware/auth"),
  protect = _require2.protect,
  authorize = _require2.authorize,
  checkDepartmentAccess = _require2.checkDepartmentAccess;
var middleware = [protect, checkDepartmentAccess];
router.post("/", addCoreBusiness);
router.patch("/:id", middleware, editCoreBusiness);
router["delete"]("/:id", middleware, deleteCoreBusiness);
router.get("/navbar", getNavbarItems);
router.get("/:id", getCoreBusinessesById);
router.get("/name/:name", getCoreBusinessesByName);
router.get("/", getAllCoreBusinesses);
module.exports = router;