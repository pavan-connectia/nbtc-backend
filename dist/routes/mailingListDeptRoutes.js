"use strict";

var _require = require("../controllers/mailingListDeptController"),
  createMailingListDept = _require.createMailingListDept,
  getMailingListDepts = _require.getMailingListDepts,
  getMailingListDeptByDeptId = _require.getMailingListDeptByDeptId,
  getMailingListDeptById = _require.getMailingListDeptById,
  updateMailingListDept = _require.updateMailingListDept,
  deleteMailingListDept = _require.deleteMailingListDept;
var express = require("express");
var _require2 = require("../middleware/auth"),
  protect = _require2.protect,
  authorize = _require2.authorize;
var router = express.Router();
var middleware = [protect, authorize("superadmin", "admin", "user")];
router.post("/", middleware, createMailingListDept);
router.get("/", getMailingListDepts);
router.get("/department/:id", getMailingListDeptByDeptId);
router.get("/:id", getMailingListDeptById);
router.patch("/:id", middleware, updateMailingListDept);
router["delete"]("/:id", middleware, deleteMailingListDept);
module.exports = router;