const express = require("express");
const router = express.Router();
const {
  createHomeDeptController,
  getAllHomeDeptController,
  getHomeDeptByIdController,
  updateHomeDeptController,
  deleteHomeDeptController,
} = require("../controllers/homeDeptController");
const { protect, checkDepartmentAccess } = require("../middleware/auth");

const middleware = [protect, checkDepartmentAccess];

router.get("/", getAllHomeDeptController);
router.post("/", middleware, createHomeDeptController);
router.get("/:id", getHomeDeptByIdController);
router.patch("/:id", middleware, updateHomeDeptController);
router.delete("/:id", middleware, deleteHomeDeptController);

module.exports = router;
