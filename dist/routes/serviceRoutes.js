"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/servicesController"),
  createServiceController = _require.createServiceController,
  getAllServiceController = _require.getAllServiceController,
  getServiceByIdController = _require.getServiceByIdController,
  getServiceByDepartmentId = _require.getServiceByDepartmentId,
  updateServiceController = _require.updateServiceController,
  deleteServiceController = _require.deleteServiceController;
var _require2 = require("../middleware/auth"),
  protect = _require2.protect,
  checkDepartmentAccess = _require2.checkDepartmentAccess;
var middleware = [protect, checkDepartmentAccess];
router.get("/", getAllServiceController);
router.post("/", middleware, createServiceController);
router.get("/:id", getServiceByIdController);
router.get("/department/:id", getServiceByDepartmentId);
router.patch("/:id", middleware, updateServiceController);
router["delete"]("/:id", middleware, deleteServiceController);
module.exports = router;