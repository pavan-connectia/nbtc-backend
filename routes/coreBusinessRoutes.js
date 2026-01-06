const express = require("express");
const router = express.Router();
const {
  addCoreBusiness,
  editCoreBusiness,
  deleteCoreBusiness,
  getAllCoreBusinesses,
  getCoreBusinessesById,
  getNavbarItems,
  getCoreBusinessesByName,
} = require("../controllers/coreBusinessControllers");
const {
  protect,
  authorize,
  checkDepartmentAccess,
} = require("../middleware/auth");

const middleware = [protect, checkDepartmentAccess];
router.post("/", addCoreBusiness);
router.patch("/:id", middleware, editCoreBusiness);
router.delete("/:id", middleware, deleteCoreBusiness);
router.get("/navbar", getNavbarItems);
router.get("/:id", getCoreBusinessesById);
router.get("/name/:name", getCoreBusinessesByName);
router.get("/", getAllCoreBusinesses);

module.exports = router;
