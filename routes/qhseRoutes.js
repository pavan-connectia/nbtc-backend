const express = require("express");
const router = express.Router();
const {
  createQhseController,
  getAllQhseController,
  getQhseByIdController,
  updateQhseController,
  deleteQhseController,
} = require("../controllers/qhseControllers");
const { protect, authorize } = require("../middleware/auth");

const middleware = [protect, authorize("superadmin")];

router.get("/", getAllQhseController);
router.post("/", middleware, createQhseController);
router.get("/:id", middleware, getQhseByIdController);
router.patch("/:id", middleware, updateQhseController);
router.delete("/:id", middleware, deleteQhseController);

module.exports = router;
