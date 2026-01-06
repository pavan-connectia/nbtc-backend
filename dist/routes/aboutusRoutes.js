"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/aboutusController"),
  createAboutusController = _require.createAboutusController,
  getAllAboutusController = _require.getAllAboutusController,
  getAboutusByIdController = _require.getAboutusByIdController,
  updateAboutusController = _require.updateAboutusController,
  deleteAboutusController = _require.deleteAboutusController;
var _require2 = require("../middleware/auth"),
  protect = _require2.protect,
  authorize = _require2.authorize;
var middleware = [protect, authorize("superadmin")];
router.get("/", getAllAboutusController);
router.post("/", middleware, createAboutusController);
router.get("/:id", middleware, getAboutusByIdController);
router.patch("/:id", middleware, updateAboutusController);
router["delete"]("/:id", middleware, deleteAboutusController);
module.exports = router;