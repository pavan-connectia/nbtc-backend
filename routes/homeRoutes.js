const express = require("express");
const router = express.Router();
const {
  createHomeController,
  getAllHomeController,
  updateHomeController,
  deleteHomeController,
} = require("../controllers/homeController");
const { protect, authorize } = require("../middleware/auth");

const middleware = [protect, authorize("superadmin")];

router.get("/", getAllHomeController);
router.post("/", middleware, createHomeController);
router.patch("/:id", middleware, updateHomeController);
router.delete("/:id", middleware, deleteHomeController);

module.exports = router;
