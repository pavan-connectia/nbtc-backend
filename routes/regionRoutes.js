const express = require("express");
const {
  createRegion,
  getAllRegion,
  getRegionByRegion,
  getRegionById,
  updateRegion,
  deleteRegion,
} = require("../controllers/regionController");
const { protect, authorize } = require("../middleware/auth");

const router = express.Router();
const middleware = [protect, authorize("superadmin")];

router.get("/region-info/", getAllRegion);
router.get("/region-info/region/:id", getRegionByRegion);
router.post("/region-info/", middleware, createRegion);
router.patch("/region-info/:id", middleware, updateRegion);
router.delete("/region-info/:id", middleware, deleteRegion);
router.get("/region-info/:id", getRegionById);

module.exports = router;
