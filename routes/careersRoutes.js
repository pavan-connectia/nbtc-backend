const express = require("express");
const router = express.Router();
const {
  createCareersFormController,
  getAllCareersFormController,
  getCareersFormByIdController,
  updateCareersFormController,
  deleteCareersFormController,
  getCareersFormByDepartmentController,
  exportCareersController,
} = require("../controllers/careers/careersFormController");
const {
  createCareersOpeningController,
  getAllCareersOpeningController,
  getCareersOpeningByIdController,
  updateCareersOpeningController,
  deleteCareersOpeningController,
  getCareersOpeningByDepartmentController,
} = require("../controllers/careers/careersOpeningController");
const {
  createCareersInfoController,
  getAllCareersInfoController,
  getCareersInfoByIdController,
  updateCareersInfoController,
  deleteCareersInfoController,
} = require("../controllers/careers/careersInfoController");

const {
  protect,
  checkDepartmentAccess,
  authorize,
} = require("../middleware/auth");

const middleware = [protect, checkDepartmentAccess];
const middleware2 = [protect, authorize("superadmin")];

router.post("/careers-info", middleware2, createCareersInfoController);
router.get("/careers-info", getAllCareersInfoController);
router.get("/careers-info/:id", middleware2, getCareersInfoByIdController);
router.patch("/careers-info/:id", middleware2, updateCareersInfoController);
router.delete("/careers-info/:id", middleware2, deleteCareersInfoController);

router.post("/careers-form", createCareersFormController);
router.get("/careers-form/export", exportCareersController);
router.get("/-form", protect, getAllCareersFormController);
router.get(
  "/careers-form/department/:id",
  protect,
  getCareersFormByDepartmentController,
);
router.get("/careers-form/:id", middleware, getCareersFormByIdController);
router.patch("/careers-form/:id", middleware, updateCareersFormController);
router.delete("/careers-form/:id", middleware, deleteCareersFormController);

router.post("/careers-opening", protect, createCareersOpeningController);
router.get("/careers-opening", getAllCareersOpeningController);
router.get(
  "/careers-opening/department/:id",
  getCareersOpeningByDepartmentController,
);
router.get("/careers-opening/:id", middleware, getCareersOpeningByIdController);
router.patch(
  "/careers-opening/:id",
  middleware,
  updateCareersOpeningController,
);
router.delete(
  "/careers-opening/:id",
  middleware,
  deleteCareersOpeningController,
);

module.exports = router;
