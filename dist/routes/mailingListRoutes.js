"use strict";

var _require = require("../controllers/mailingListController"),
  createMailingList = _require.createMailingList,
  getMailingLists = _require.getMailingLists,
  updateMailingList = _require.updateMailingList,
  deleteMailingList = _require.deleteMailingList,
  getMailingListById = _require.getMailingListById;
var express = require("express");
var _require2 = require("../middleware/auth"),
  protect = _require2.protect,
  authorize = _require2.authorize;
var router = express.Router();
var middleware = [protect, authorize("superadmin")];
router.post("/", middleware, createMailingList);
router.get("/", getMailingLists);
router.get("/:id", getMailingListById);
router.patch("/:id", middleware, updateMailingList);
router["delete"]("/:id", middleware, deleteMailingList);
module.exports = router;