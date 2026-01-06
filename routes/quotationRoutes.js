const express = require("express");
const router = express.Router();
const {
  addQuotation,
  editQuotation,
  deleteQuotation,
  getAllQuotation,
  getQuotationById,
  getQuotationByDepartment,
} = require("../controllers/quotationControllers");
const { protect, checkDepartmentAccess } = require("../middleware/auth");

router.get("/", getAllQuotation);
router.get("/department/:id", getQuotationByDepartment);
router.post("/", addQuotation);
router.get("/:id", protect, checkDepartmentAccess, getQuotationById);
router.patch("/:id", protect, checkDepartmentAccess, editQuotation);
router.delete("/:id", protect, checkDepartmentAccess, deleteQuotation);

module.exports = router;
