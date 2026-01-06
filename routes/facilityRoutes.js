const express = require("express");
const router = express.Router();
const {
  createFacilityController,
  getAllFacilityController,
  getFacilityByIdController,
  getFacilityByDepartmentId,
  updateFacilityController,
  deleteFacilityController,
} = require("../controllers/facilityController");
const { protect, checkDepartmentAccess } = require("../middleware/auth");

const middleware = [protect, checkDepartmentAccess];

router.get("/", getAllFacilityController);
router.post("/", middleware, createFacilityController);
router.get("/:id", getFacilityByIdController);
router.get("/department/:id", getFacilityByDepartmentId);
router.patch("/:id", middleware, updateFacilityController);
router.delete("/:id", middleware, deleteFacilityController);

module.exports = router;
