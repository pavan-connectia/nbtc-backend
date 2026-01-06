const express = require("express");
const router = express.Router();
const {
  userLoginController,
  superAdminSignupController,
  createUserController,
  forgotPasswordController,
  resetPasswordController,
  updateUserController,
  getUserController,
  deleteUserController,
  getUserByDepartmentController,
  getUserByTokenController,
  updateUserByTokenController,
  userLogoutController,
} = require("../controllers/userController");
const { authorize, protect } = require("../middleware/auth");

const middleware = [protect, authorize("superadmin", "admin")];
const middleware2 = [protect, authorize("admin")];

router.post("/login", userLoginController);
router.post("/signup", superAdminSignupController);
router.post("/forgot-password", forgotPasswordController);
router.put("/reset-password/:token", resetPasswordController);

router.post("/create-user", middleware, createUserController);

router.get("/", middleware, getUserController);
router.get("/department/", middleware2, getUserByDepartmentController);
router.get("/token", protect, getUserByTokenController);
router.patch("/token", protect, updateUserByTokenController);

router.patch("/update-user/:id", updateUserController);
router.patch("/:id", middleware, deleteUserController);

module.exports = router;
