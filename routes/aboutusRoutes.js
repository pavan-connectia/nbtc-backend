const express = require("express");
const router = express.Router();
const {
  createAboutusController,
  getAllAboutusController,
  getAboutusByIdController,
  updateAboutusController,
  deleteAboutusController,
} = require("../controllers/aboutusController");
const { protect, authorize } = require("../middleware/auth");

const middleware = [protect, authorize("superadmin")];

router.get("/", getAllAboutusController);
router.post("/", middleware, createAboutusController);
router.get("/:id", middleware, getAboutusByIdController);
router.patch("/:id", middleware, updateAboutusController);
router.delete("/:id", middleware, deleteAboutusController);

module.exports = router;
