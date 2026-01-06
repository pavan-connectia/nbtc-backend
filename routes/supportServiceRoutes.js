const express = require("express");
const {
  createSupportServiceController,
  getAllSupportServiceController,
  getSupportServiceByIdController,
  updateSupportServiceController,
  deleteSupportServiceController,
} = require("../controllers/supportServiceController");
const router = express.Router();

router.post("/", createSupportServiceController);
router.get("/", getAllSupportServiceController);
router.get("/:id", getSupportServiceByIdController);
router.patch("/:id", updateSupportServiceController);
router.delete("/:id", deleteSupportServiceController);

module.exports = router;
