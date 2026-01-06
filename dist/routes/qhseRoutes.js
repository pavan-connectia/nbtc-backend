"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/qhseControllers"),
  createQhseController = _require.createQhseController,
  getAllQhseController = _require.getAllQhseController,
  getQhseByIdController = _require.getQhseByIdController,
  updateQhseController = _require.updateQhseController,
  deleteQhseController = _require.deleteQhseController;
var _require2 = require("../middleware/auth"),
  protect = _require2.protect,
  authorize = _require2.authorize;
var middleware = [protect, authorize("superadmin")];
router.get("/", getAllQhseController);
router.post("/", middleware, createQhseController);
router.get("/:id", middleware, getQhseByIdController);
router.patch("/:id", middleware, updateQhseController);
router["delete"]("/:id", middleware, deleteQhseController);
module.exports = router;