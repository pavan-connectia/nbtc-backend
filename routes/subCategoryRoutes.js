const express = require("express");
const router = express.Router();
const {
  createSubCategoryController,
  getAllSubCategoryController,
  getSubCategoryByDepartment,
  getSubCategoryByFeaturedPopular,
  getSubCategoryByFeaturedPopularByDeptId,
  getSubCategoryByIdController,
  getSubCategoryByDepartmentId,
  getSubCategoryByCategory,
  updateSubCategoryController,
  deleteSubCategoryController,
} = require("../controllers/subCategoryController");
const { protect, checkDepartmentAccess } = require("../middleware/auth");

const middleware = [protect, checkDepartmentAccess];

router.get("/", getAllSubCategoryController);
router.get("/name", getSubCategoryByDepartment);
router.get("/featured-popular", getSubCategoryByFeaturedPopular);
router.get(
  "/featured-popular/department/:id",
  getSubCategoryByFeaturedPopularByDeptId,
);
router.get("/department/:id", getSubCategoryByDepartmentId);
router.get("/category", getSubCategoryByCategory);
router.post("/", middleware, createSubCategoryController);
router.get("/:id", getSubCategoryByIdController);
router.patch("/:id", middleware, updateSubCategoryController);
router.delete("/:id", middleware, deleteSubCategoryController);

module.exports = router;
