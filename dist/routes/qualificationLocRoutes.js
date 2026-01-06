"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/qualificationLocationController"),
  createQualificationLocController = _require.createQualificationLocController,
  getAllQualificationLocController = _require.getAllQualificationLocController,
  getQualificationLocByIdController = _require.getQualificationLocByIdController,
  updateQualificationLocController = _require.updateQualificationLocController,
  deleteQualificationLocController = _require.deleteQualificationLocController;
var _require2 = require("../middleware/auth"),
  protect = _require2.protect,
  authorize = _require2.authorize;
var middleware = [protect, authorize("superadmin")];
router.get("/", getAllQualificationLocController);
router.post("/", middleware, createQualificationLocController);
router.get("/:id", middleware, getQualificationLocByIdController);
router.patch("/:id", middleware, updateQualificationLocController);
router["delete"]("/:id", middleware, deleteQualificationLocController);
module.exports = router;