const {
  createMailingListDept,
  getMailingListDepts,
  getMailingListDeptByDeptId,
  getMailingListDeptById,
  updateMailingListDept,
  deleteMailingListDept,
} = require("../controllers/mailingListDeptController");
const express = require("express");
const { protect, authorize } = require("../middleware/auth");

const router = express.Router();
const middleware = [protect, authorize("superadmin", "admin", "user")];

router.post("/", middleware, createMailingListDept);
router.get("/", getMailingListDepts);
router.get("/department/:id", getMailingListDeptByDeptId);
router.get("/:id", getMailingListDeptById);
router.patch("/:id", middleware, updateMailingListDept);
router.delete("/:id", middleware, deleteMailingListDept);

module.exports = router;
