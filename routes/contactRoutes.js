const express = require("express");
const router = express.Router();

const {
  createContactInfoController,
  getAllContactInfoController,
  getContactInfoByIdController,
  updateContactInfoController,
  deleteContactInfoController,
} = require("../controllers/contact/contactInfoController");

const {
  createSubmissionController,
  getAllSubmissionsController,
  getDepartmentSubmissionsController,
  getSubmissionByIdController,
  updateSubmissionController,
  deleteSubmissionController,
  exportSubmissionController,
} = require("../controllers/contact/contactFormController");
const { authorize, protect } = require("../middleware/auth");

const middleware = [protect, authorize("superadmin")];

router.post("/contact-info", middleware, createContactInfoController);
router.get("/contact-info", getAllContactInfoController);
router.get("/contact-info/:id", middleware, getContactInfoByIdController);
router.patch("/contact-info/:id", middleware, updateContactInfoController);
router.delete("/contact-info/:id", middleware, deleteContactInfoController);

router.post("/contact-form", createSubmissionController);
router.get("/contact-form/export", exportSubmissionController);
router.get("/contact-form", protect, getAllSubmissionsController);
router.get(
  "/contact-form/department/:id",
  protect,
  getDepartmentSubmissionsController
);
router.get("/contact-form/:id", middleware, getSubmissionByIdController);
router.patch("/contact-form/:id", middleware, updateSubmissionController);
router.delete("/contact-form/:id", middleware, deleteSubmissionController);

module.exports = router;
