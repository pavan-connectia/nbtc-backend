"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/userController"),
  userLoginController = _require.userLoginController,
  superAdminSignupController = _require.superAdminSignupController,
  createUserController = _require.createUserController,
  forgotPasswordController = _require.forgotPasswordController,
  resetPasswordController = _require.resetPasswordController,
  updateUserController = _require.updateUserController,
  getUserController = _require.getUserController,
  deleteUserController = _require.deleteUserController,
  getUserByDepartmentController = _require.getUserByDepartmentController,
  getUserByTokenController = _require.getUserByTokenController,
  updateUserByTokenController = _require.updateUserByTokenController,
  userLogoutController = _require.userLogoutController;
var _require2 = require("../middleware/auth"),
  authorize = _require2.authorize,
  protect = _require2.protect;
var middleware = [protect, authorize("superadmin", "admin")];
var middleware2 = [protect, authorize("admin")];
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