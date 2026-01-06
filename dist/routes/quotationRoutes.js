"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/quotationControllers"),
  addQuotation = _require.addQuotation,
  editQuotation = _require.editQuotation,
  deleteQuotation = _require.deleteQuotation,
  getAllQuotation = _require.getAllQuotation,
  getQuotationById = _require.getQuotationById,
  getQuotationByDepartment = _require.getQuotationByDepartment;
var _require2 = require("../middleware/auth"),
  protect = _require2.protect,
  checkDepartmentAccess = _require2.checkDepartmentAccess;
router.get("/", getAllQuotation);
router.get("/department/:id", getQuotationByDepartment);
router.post("/", addQuotation);
router.get("/:id", protect, checkDepartmentAccess, getQuotationById);
router.patch("/:id", protect, checkDepartmentAccess, editQuotation);
router["delete"]("/:id", protect, checkDepartmentAccess, deleteQuotation);
module.exports = router;