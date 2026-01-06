"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/clientsController"),
  createClientsController = _require.createClientsController,
  getAllClientsController = _require.getAllClientsController,
  getClientsByIdController = _require.getClientsByIdController,
  updateClientsController = _require.updateClientsController,
  deleteClientsController = _require.deleteClientsController;
var _require2 = require("../middleware/auth"),
  protect = _require2.protect,
  authorize = _require2.authorize;
var middleware = [protect, authorize("superadmin")];
router.get("/", getAllClientsController);
router.post("/", middleware, createClientsController);
router.get("/:id", middleware, getClientsByIdController);
router.patch("/:id", middleware, updateClientsController);
router["delete"]("/:id", middleware, deleteClientsController);
module.exports = router;