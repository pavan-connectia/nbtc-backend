"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/qualificationController"),
  createQualificationController = _require.createQualificationController,
  getAllQualificationController = _require.getAllQualificationController,
  getQualificationByIdController = _require.getQualificationByIdController,
  updateQualificationController = _require.updateQualificationController,
  deleteQualificationController = _require.deleteQualificationController;
var _require2 = require("../middleware/auth"),
  protect = _require2.protect,
  authorize = _require2.authorize;
var middleware = [protect, authorize("superadmin")];
router.get("/", getAllQualificationController);
router.post("/", middleware, createQualificationController);
router.get("/:id", middleware, getQualificationByIdController);
router.patch("/:id", middleware, updateQualificationController);
router["delete"]("/:id", middleware, deleteQualificationController);
module.exports = router;