"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/homeDeptController"),
  createHomeDeptController = _require.createHomeDeptController,
  getAllHomeDeptController = _require.getAllHomeDeptController,
  getHomeDeptByIdController = _require.getHomeDeptByIdController,
  updateHomeDeptController = _require.updateHomeDeptController,
  deleteHomeDeptController = _require.deleteHomeDeptController;
var _require2 = require("../middleware/auth"),
  protect = _require2.protect,
  checkDepartmentAccess = _require2.checkDepartmentAccess;
var middleware = [protect, checkDepartmentAccess];
router.get("/", getAllHomeDeptController);
router.post("/", middleware, createHomeDeptController);
router.get("/:id", getHomeDeptByIdController);
router.patch("/:id", middleware, updateHomeDeptController);
router["delete"]("/:id", middleware, deleteHomeDeptController);
module.exports = router;