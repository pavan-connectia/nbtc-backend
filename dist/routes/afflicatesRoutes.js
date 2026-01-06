"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/afflicatesController"),
  createAfflicatesController = _require.createAfflicatesController,
  getAllAfflicatesController = _require.getAllAfflicatesController,
  getAfflicatesByIdController = _require.getAfflicatesByIdController,
  updateAfflicatesController = _require.updateAfflicatesController,
  deleteAfflicatesController = _require.deleteAfflicatesController;
var _require2 = require("../middleware/auth"),
  protect = _require2.protect,
  authorize = _require2.authorize;
var middleware = [protect, authorize("superadmin")];
router.get("/", getAllAfflicatesController);
router.post("/", middleware, createAfflicatesController);
router.get("/:id", middleware, getAfflicatesByIdController);
router.patch("/:id", middleware, updateAfflicatesController);
router["delete"]("/:id", middleware, deleteAfflicatesController);
module.exports = router;