"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/homeController"),
  createHomeController = _require.createHomeController,
  getAllHomeController = _require.getAllHomeController,
  updateHomeController = _require.updateHomeController,
  deleteHomeController = _require.deleteHomeController;
var _require2 = require("../middleware/auth"),
  protect = _require2.protect,
  authorize = _require2.authorize;
var middleware = [protect, authorize("superadmin")];
router.get("/", getAllHomeController);
router.post("/", middleware, createHomeController);
router.patch("/:id", middleware, updateHomeController);
router["delete"]("/:id", middleware, deleteHomeController);
module.exports = router;