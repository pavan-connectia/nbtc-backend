const express = require("express");
const router = express.Router();
const {
  createBrandsController,
  getAllBrandsController,
  getBrandsByIdController,
  updateBrandsController,
  deleteBrandsController,
  getBrandsByDepartmentId,
} = require("../controllers/brandsController");
const { protect, checkDepartmentAccess } = require("../middleware/auth");

const middleware = [protect, checkDepartmentAccess];

router.get("/department/:id", getBrandsByDepartmentId);
router.get("/", getAllBrandsController);
router.post("/", middleware, createBrandsController);
router.get("/:id", getBrandsByIdController);
router.patch("/:id", middleware, updateBrandsController);
router.delete("/:id", middleware, deleteBrandsController);

module.exports = router;
