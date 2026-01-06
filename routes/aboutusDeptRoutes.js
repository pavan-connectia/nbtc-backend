const express = require("express");
const router = express.Router();
const {
  createAboutusDeptController,
  getAllAboutusDeptController,
  getAboutusDeptByIdController,
  updateAboutusDeptController,
  deleteAboutusDeptController,
} = require("../controllers/aboutusDeptController");
const { protect, checkDepartmentAccess } = require("../middleware/auth");

const middleware = [protect, checkDepartmentAccess];

router.get("/", getAllAboutusDeptController);
router.post("/", middleware, createAboutusDeptController);
router.get("/:id", getAboutusDeptByIdController);
router.patch("/:id", middleware, updateAboutusDeptController);
router.delete("/:id", middleware, deleteAboutusDeptController);

module.exports = router;
