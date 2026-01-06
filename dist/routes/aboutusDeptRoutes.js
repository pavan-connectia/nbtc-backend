"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/aboutusDeptController"),
  createAboutusDeptController = _require.createAboutusDeptController,
  getAllAboutusDeptController = _require.getAllAboutusDeptController,
  getAboutusDeptByIdController = _require.getAboutusDeptByIdController,
  updateAboutusDeptController = _require.updateAboutusDeptController,
  deleteAboutusDeptController = _require.deleteAboutusDeptController;
var _require2 = require("../middleware/auth"),
  protect = _require2.protect,
  checkDepartmentAccess = _require2.checkDepartmentAccess;
var middleware = [protect, checkDepartmentAccess];
router.get("/", getAllAboutusDeptController);
router.post("/", middleware, createAboutusDeptController);
router.get("/:id", getAboutusDeptByIdController);
router.patch("/:id", middleware, updateAboutusDeptController);
router["delete"]("/:id", middleware, deleteAboutusDeptController);
module.exports = router;