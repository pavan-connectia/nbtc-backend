"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/careers/careersFormController"),
  createCareersFormController = _require.createCareersFormController,
  getAllCareersFormController = _require.getAllCareersFormController,
  getCareersFormByIdController = _require.getCareersFormByIdController,
  updateCareersFormController = _require.updateCareersFormController,
  deleteCareersFormController = _require.deleteCareersFormController,
  getCareersFormByDepartmentController = _require.getCareersFormByDepartmentController,
  exportCareersController = _require.exportCareersController;
var _require2 = require("../controllers/careers/careersOpeningController"),
  createCareersOpeningController = _require2.createCareersOpeningController,
  getAllCareersOpeningController = _require2.getAllCareersOpeningController,
  getCareersOpeningByIdController = _require2.getCareersOpeningByIdController,
  updateCareersOpeningController = _require2.updateCareersOpeningController,
  deleteCareersOpeningController = _require2.deleteCareersOpeningController,
  getCareersOpeningByDepartmentController = _require2.getCareersOpeningByDepartmentController;
var _require3 = require("../controllers/careers/careersInfoController"),
  createCareersInfoController = _require3.createCareersInfoController,
  getAllCareersInfoController = _require3.getAllCareersInfoController,
  getCareersInfoByIdController = _require3.getCareersInfoByIdController,
  updateCareersInfoController = _require3.updateCareersInfoController,
  deleteCareersInfoController = _require3.deleteCareersInfoController;
var _require4 = require("../middleware/auth"),
  protect = _require4.protect,
  checkDepartmentAccess = _require4.checkDepartmentAccess,
  authorize = _require4.authorize;
var middleware = [protect, checkDepartmentAccess];
var middleware2 = [protect, authorize("superadmin")];
router.post("/careers-info", middleware2, createCareersInfoController);
router.get("/careers-info", getAllCareersInfoController);
router.get("/careers-info/:id", middleware2, getCareersInfoByIdController);
router.patch("/careers-info/:id", middleware2, updateCareersInfoController);
router["delete"]("/careers-info/:id", middleware2, deleteCareersInfoController);
router.post("/careers-form", createCareersFormController);
router.get("/careers-form/export", exportCareersController);
router.get("/-form", protect, getAllCareersFormController);
router.get("/careers-form/department/:id", protect, getCareersFormByDepartmentController);
router.get("/careers-form/:id", middleware, getCareersFormByIdController);
router.patch("/careers-form/:id", middleware, updateCareersFormController);
router["delete"]("/careers-form/:id", middleware, deleteCareersFormController);
router.post("/careers-opening", protect, createCareersOpeningController);
router.get("/careers-opening", getAllCareersOpeningController);
router.get("/careers-opening/department/:id", getCareersOpeningByDepartmentController);
router.get("/careers-opening/:id", middleware, getCareersOpeningByIdController);
router.patch("/careers-opening/:id", middleware, updateCareersOpeningController);
router["delete"]("/careers-opening/:id", middleware, deleteCareersOpeningController);
module.exports = router;