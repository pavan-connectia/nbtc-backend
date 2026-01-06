const express = require("express");
const router = express.Router();
const {
  createServiceController,
  getAllServiceController,
  getServiceByIdController,
  getServiceByDepartmentId,
  updateServiceController,
  deleteServiceController,
} = require("../controllers/servicesController");
const { protect, checkDepartmentAccess } = require("../middleware/auth");

const middleware = [protect, checkDepartmentAccess];

router.get("/", getAllServiceController);
router.post("/", middleware, createServiceController);
router.get("/:id", getServiceByIdController);
router.get("/department/:id", getServiceByDepartmentId);
router.patch("/:id", middleware, updateServiceController);
router.delete("/:id", middleware, deleteServiceController);

module.exports = router;
