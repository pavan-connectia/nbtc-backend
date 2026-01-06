"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/brandsController"),
  createBrandsController = _require.createBrandsController,
  getAllBrandsController = _require.getAllBrandsController,
  getBrandsByIdController = _require.getBrandsByIdController,
  updateBrandsController = _require.updateBrandsController,
  deleteBrandsController = _require.deleteBrandsController,
  getBrandsByDepartmentId = _require.getBrandsByDepartmentId;
var _require2 = require("../middleware/auth"),
  protect = _require2.protect,
  checkDepartmentAccess = _require2.checkDepartmentAccess;
var middleware = [protect, checkDepartmentAccess];
router.get("/department/:id", getBrandsByDepartmentId);
router.get("/", getAllBrandsController);
router.post("/", middleware, createBrandsController);
router.get("/:id", getBrandsByIdController);
router.patch("/:id", middleware, updateBrandsController);
router["delete"]("/:id", middleware, deleteBrandsController);
module.exports = router;