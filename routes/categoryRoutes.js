const express = require("express");
const router = express.Router();
const {
  getCategoryByFeaturedPopular,
  getCategoryByFeaturedPopularByDeptId,
  createCategoryController,
  getAllCategoryController,
  getCategoryByDepartment,
  getCategoryByIdController,
  getCategoryByDepartmentId,
  updateCategoryController,
  deleteCategoryController,
} = require("../controllers/categoryController");
const { protect, checkDepartmentAccess } = require("../middleware/auth");

const middleware = [protect, checkDepartmentAccess];

router.get("/featured-popular", getCategoryByFeaturedPopular);
router.get(
  "/featured-popular/department/:id",
  getCategoryByFeaturedPopularByDeptId,
);
router.get("/", getAllCategoryController);
router.get("/name", getCategoryByDepartment);
router.post("/", middleware, createCategoryController);
router.get("/:id", getCategoryByIdController);
router.get("/department/:id", getCategoryByDepartmentId);
router.patch("/:id", middleware, updateCategoryController);
router.delete("/:id", middleware, deleteCategoryController);

module.exports = router;
