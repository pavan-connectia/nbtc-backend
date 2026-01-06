const express = require("express");
const router = express.Router();
const {
  createEventController,
  getAllEventController,
  updateEventController,
  deleteEventController,
} = require("../controllers/eventController");
const { protect, authorize } = require("../middleware/auth");

const middleware = [protect, authorize("superadmin")];

router.get("/", getAllEventController);
router.post("/", middleware, createEventController);
router.patch("/:id", middleware, updateEventController);
router.delete("/:id", middleware, deleteEventController);

module.exports = router;
