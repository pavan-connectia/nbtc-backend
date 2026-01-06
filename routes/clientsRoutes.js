const express = require("express");
const router = express.Router();
const {
  createClientsController,
  getAllClientsController,
  getClientsByIdController,
  updateClientsController,
  deleteClientsController,
} = require("../controllers/clientsController");
const { protect, authorize } = require("../middleware/auth");

const middleware = [protect, authorize("superadmin")];

router.get("/", getAllClientsController);
router.post("/", middleware, createClientsController);
router.get("/:id", middleware, getClientsByIdController);
router.patch("/:id", middleware, updateClientsController);
router.delete("/:id", middleware, deleteClientsController);

module.exports = router;
