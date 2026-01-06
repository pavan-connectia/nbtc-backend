"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/categoryController"),
  getCategoryByFeaturedPopular = _require.getCategoryByFeaturedPopular,
  getCategoryByFeaturedPopularByDeptId = _require.getCategoryByFeaturedPopularByDeptId,
  createCategoryController = _require.createCategoryController,
  getAllCategoryController = _require.getAllCategoryController,
  getCategoryByDepartment = _require.getCategoryByDepartment,
  getCategoryByIdController = _require.getCategoryByIdController,
  getCategoryByDepartmentId = _require.getCategoryByDepartmentId,
  updateCategoryController = _require.updateCategoryController,
  deleteCategoryController = _require.deleteCategoryController;
var _require2 = require("../middleware/auth"),
  protect = _require2.protect,
  checkDepartmentAccess = _require2.checkDepartmentAccess;
var middleware = [protect, checkDepartmentAccess];
router.get("/featured-popular", getCategoryByFeaturedPopular);
router.get("/featured-popular/department/:id", getCategoryByFeaturedPopularByDeptId);
router.get("/", getAllCategoryController);
router.get("/name", getCategoryByDepartment);
router.post("/", middleware, createCategoryController);
router.get("/:id", getCategoryByIdController);
router.get("/department/:id", getCategoryByDepartmentId);
router.patch("/:id", middleware, updateCategoryController);
router["delete"]("/:id", middleware, deleteCategoryController);
module.exports = router;