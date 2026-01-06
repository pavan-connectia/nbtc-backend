const express = require("express");
const router = express.Router();
const {
  createBranchesController,
  getAllBranchesController,
  getBranchesByNameController,
  updateBranchesController,
  deleteBranchesController,
} = require("../controllers/branchesController");
const { protect, authorize } = require("../middleware/auth");

const middleware = [protect, authorize("superadmin")];

router.get("/", middleware, getAllBranchesController);
router.post("/", middleware, createBranchesController);
router.get("/:name", getBranchesByNameController);
router.patch("/:id", middleware, updateBranchesController);
router.delete("/:id", middleware, deleteBranchesController);

module.exports = router;
