const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const sendEmail = require("../utils/sendContactEmail");
const bcrypt = require("bcryptjs");

const userLoginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
    );
    const userData = user.toObject();
    delete userData.password;

    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      data: {
        ...userData,
        token: token,
      },
    });
  } catch (error) {
    
    res.status(500).json({ success: false, message: error.message });
  }
};

const createUserController = async (req, res) => {
  try {
    const newUser = new User(req.body);

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "Employee created successfully",
      newUser,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const superAdminSignupController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingSuperAdmin = await User.findOne({ email });
    if (existingSuperAdmin) {
      return res
        .status(400)
        .json({ success: false, message: "SuperAdmin already exists" });
    }

    const newSuperAdmin = new User({
      name,
      email,
      password,
      role: "superadmin",
      permissions: {
        create: true,
        read: true,
        update: true,
        delete: true,
      },
    });

    const superAdminData = await newSuperAdmin.save();

    const token = jwt.sign({ id: newSuperAdmin._id }, process.env.JWT_SECRET);

    const userWithoutPassword = superAdminData.toObject();
    delete userWithoutPassword.password;
    res.status(201).json({
      success: true,
      message: "SuperAdmin created successfully",
      data: {
        ...userWithoutPassword,
        token: token,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const forgotPasswordController = async (req, res) => {
  const { email } = req.body;

  let user;

  try {
    user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const resetToken = user.getResetPasswordToken();

    // Save the user without validation
    await user.save({ validateBeforeSave: false });

    // Create the reset URL with the token

    const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;

    // HTML content for the email
    const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; padding: 20px; background-color: white; border: 1px solid #e0e0e0; border-radius: 10px;">
      <div style="text-align: center;">
        <img src="https://nbtc-group.vercel.app/logo.png" alt="Nbtc Logo" style="max-width: 150px; margin-bottom: 20px;">
      </div>
      <h2 style="color: #333333; text-align: center;">Reset Your Password</h2>
      <p style="color: #555555;">Hi <strong>${user.email}</strong>,</p>
      <p style="color: #555555;">It seems like you requested a password reset. Click the button below to reset your password:</p>
      <div style="text-align: center; margin: 20px 0;">
        <a href='${resetUrl}' style="display: inline-block; padding: 12px 24px; background-color: #00215B; color: #ffffff; text-decoration: none; font-weight: bold; border-radius: 6px;">Reset Password</a>
      </div>
      <p style="color: #555555;">If you didn't request this change, you can safely ignore this email.</p>
      <p style="color: #555555;">Thank you,<br>The NBTC Group</p>
      <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
      <p style="font-size: 12px; color: #999999; text-align: center;">
        &copy; 2024 NBTC. All rights reserved.<br>
      </p>
    </div>
    `;

    await sendEmail({
      email: user.email,
      subject: "Password Reset Request",
      html: htmlContent,
    });

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    if (user) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save({ validateBeforeSave: false });
    }

    return res
      .status(500)
      .json({ success: false, message: "Email could not be sent" });
  }
};

const resetPasswordController = async (req, res) => {
  try {
    // Get the token from the URL and hash it
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() }, // Ensure the token is still valid
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired password reset token",
      });
    }

    // Update the password and clear the reset fields
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    // Optionally, sign a new token for the user after password reset
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.status(200).json({
      success: true,
      message: "Password reset successful",
      token,
    });
  } catch (error) {
    
    res.status(500).json({
      success: false,
      message: "Internal server error",error:error.message
    });
  }
};

const updateUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password, department, role, permissions } = req.body;

    let user = await User.findById(id);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    if (name) user.name = name;
    if (email) user.email = email;

    if (password) {
      user.password = password;
    }

    if (role) {
      user.role = role;
      if (role !== "superadmin" && department) {
        user.department = department;
      }
    }

    if (permissions) {
      user.assignPermissions(permissions);
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

const getUserController = async (req, res) => {
  try {
    const user = await User.find().populate("department", "name href");

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

const deleteUserController = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getUserByDepartmentController = async (req, res) => {
  try {
    const { department } = req.user;
    const user = await User.find({ department: department }).populate(
      "department",
      "name href",
    );

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

const getUserByTokenController = async (req, res) => {
  try {
    const { _id } = req.user;
    const user = await User.findById(_id);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

const updateUserByTokenController = async (req, res) => {
  try {
    const { _id } = req.user;
    let updateData = { ...req.body };

    // Hash the password if it's provided in the update
    if (updateData.password) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(updateData.password, salt);
    }

    const user = await User.findByIdAndUpdate(_id, updateData, { new: true });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    console.error("update", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error,
    });
  }
};

module.exports = {
  userLoginController,
  createUserController,
  superAdminSignupController,
  forgotPasswordController,
  resetPasswordController,
  updateUserController,
  getUserController,
  deleteUserController,
  getUserByDepartmentController,
  getUserByTokenController,
  updateUserByTokenController,
};

