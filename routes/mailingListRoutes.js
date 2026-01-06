const {
  createMailingList,
  getMailingLists,
  updateMailingList,
  deleteMailingList,
  getMailingListById,
} = require("../controllers/mailingListController");
const express = require("express");
const { protect, authorize } = require("../middleware/auth");

const router = express.Router();
const middleware = [protect, authorize("superadmin")];

router.post("/", middleware, createMailingList);
router.get("/", getMailingLists);
router.get("/:id", getMailingListById);
router.patch("/:id", middleware, updateMailingList);
router.delete("/:id", middleware, deleteMailingList);

module.exports = router;
