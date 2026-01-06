"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/contact/contactInfoController"),
  createContactInfoController = _require.createContactInfoController,
  getAllContactInfoController = _require.getAllContactInfoController,
  getContactInfoByIdController = _require.getContactInfoByIdController,
  updateContactInfoController = _require.updateContactInfoController,
  deleteContactInfoController = _require.deleteContactInfoController;
var _require2 = require("../controllers/contact/contactFormController"),
  createSubmissionController = _require2.createSubmissionController,
  getAllSubmissionsController = _require2.getAllSubmissionsController,
  getDepartmentSubmissionsController = _require2.getDepartmentSubmissionsController,
  getSubmissionByIdController = _require2.getSubmissionByIdController,
  updateSubmissionController = _require2.updateSubmissionController,
  deleteSubmissionController = _require2.deleteSubmissionController,
  exportSubmissionController = _require2.exportSubmissionController;
var _require3 = require("../middleware/auth"),
  authorize = _require3.authorize,
  protect = _require3.protect;
var middleware = [protect, authorize("superadmin")];
router.post("/contact-info", middleware, createContactInfoController);
router.get("/contact-info", getAllContactInfoController);
router.get("/contact-info/:id", middleware, getContactInfoByIdController);
router.patch("/contact-info/:id", middleware, updateContactInfoController);
router["delete"]("/contact-info/:id", middleware, deleteContactInfoController);
router.post("/contact-form", createSubmissionController);
router.get("/contact-form/export", exportSubmissionController);
router.get("/contact-form", protect, getAllSubmissionsController);
router.get("/contact-form/department/:id", protect, getDepartmentSubmissionsController);
router.get("/contact-form/:id", middleware, getSubmissionByIdController);
router.patch("/contact-form/:id", middleware, updateSubmissionController);
router["delete"]("/contact-form/:id", middleware, deleteSubmissionController);
module.exports = router;