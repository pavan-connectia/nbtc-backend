"use strict";

var express = require("express");
var _require = require("../controllers/supportServiceController"),
  createSupportServiceController = _require.createSupportServiceController,
  getAllSupportServiceController = _require.getAllSupportServiceController,
  getSupportServiceByIdController = _require.getSupportServiceByIdController,
  updateSupportServiceController = _require.updateSupportServiceController,
  deleteSupportServiceController = _require.deleteSupportServiceController;
var router = express.Router();
router.post("/", createSupportServiceController);
router.get("/", getAllSupportServiceController);
router.get("/:id", getSupportServiceByIdController);
router.patch("/:id", updateSupportServiceController);
router["delete"]("/:id", deleteSupportServiceController);
module.exports = router;