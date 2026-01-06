"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/eventController"),
  createEventController = _require.createEventController,
  getAllEventController = _require.getAllEventController,
  updateEventController = _require.updateEventController,
  deleteEventController = _require.deleteEventController;
var _require2 = require("../middleware/auth"),
  protect = _require2.protect,
  authorize = _require2.authorize;
var middleware = [protect, authorize("superadmin")];
router.get("/", getAllEventController);
router.post("/", middleware, createEventController);
router.patch("/:id", middleware, updateEventController);
router["delete"]("/:id", middleware, deleteEventController);
module.exports = router;