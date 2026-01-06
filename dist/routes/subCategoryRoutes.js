"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/subCategoryController"),
  createSubCategoryController = _require.createSubCategoryController,
  getAllSubCategoryController = _require.getAllSubCategoryController,
  getSubCategoryByDepartment = _require.getSubCategoryByDepartment,
  getSubCategoryByFeaturedPopular = _require.getSubCategoryByFeaturedPopular,
  getSubCategoryByFeaturedPopularByDeptId = _require.getSubCategoryByFeaturedPopularByDeptId,
  getSubCategoryByIdController = _require.getSubCategoryByIdController,
  getSubCategoryByDepartmentId = _require.getSubCategoryByDepartmentId,
  getSubCategoryByCategory = _require.getSubCategoryByCategory,
  updateSubCategoryController = _require.updateSubCategoryController,
  deleteSubCategoryController = _require.deleteSubCategoryController;
var _require2 = require("../middleware/auth"),
  protect = _require2.protect,
  checkDepartmentAccess = _require2.checkDepartmentAccess;
var middleware = [protect, checkDepartmentAccess];
router.get("/", getAllSubCategoryController);
router.get("/name", getSubCategoryByDepartment);
router.get("/featured-popular", getSubCategoryByFeaturedPopular);
router.get("/featured-popular/department/:id", getSubCategoryByFeaturedPopularByDeptId);
router.get("/department/:id", getSubCategoryByDepartmentId);
router.get("/category", getSubCategoryByCategory);
router.post("/", middleware, createSubCategoryController);
router.get("/:id", getSubCategoryByIdController);
router.patch("/:id", middleware, updateSubCategoryController);
router["delete"]("/:id", middleware, deleteSubCategoryController);
module.exports = router;