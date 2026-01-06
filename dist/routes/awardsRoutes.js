"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/awardsController"),
  createAwards = _require.createAwards,
  getAllAwards = _require.getAllAwards,
  getAwardsByDepartment = _require.getAwardsByDepartment,
  getAwardsById = _require.getAwardsById,
  updateAwards = _require.updateAwards,
  deleteAwards = _require.deleteAwards;
var _require2 = require("../middleware/auth"),
  protect = _require2.protect,
  authorize = _require2.authorize;
var middleware = [protect, authorize("superadmin", "admin", "user")];
router.get("/", getAllAwards);
router.get("/department/:id", getAwardsByDepartment);
router.post("/", middleware, createAwards);
router.get("/:id", middleware, getAwardsById);
router.patch("/:id", middleware, updateAwards);
router["delete"]("/:id", middleware, deleteAwards);
module.exports = router;