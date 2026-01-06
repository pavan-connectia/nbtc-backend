const express = require("express");
const router = express.Router();
const {
  createAwards,
  getAllAwards,
  getAwardsByDepartment,
  getAwardsById,
  updateAwards,
  deleteAwards,
} = require("../controllers/awardsController");
const { protect, authorize } = require("../middleware/auth");

const middleware = [protect, authorize("superadmin", "admin", "user")];

router.get("/", getAllAwards);
router.get("/department/:id", getAwardsByDepartment);
router.post("/", middleware, createAwards);
router.get("/:id", middleware, getAwardsById);
router.patch("/:id", middleware, updateAwards);
router.delete("/:id", middleware, deleteAwards);

module.exports = router;
