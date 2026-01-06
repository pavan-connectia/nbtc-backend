const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const mongoose = require("mongoose");

const protect = async (req, res, next) => {
  try {
    let token = null;

    if (req.headers.authorization?.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token && req.cookies?.token) {
      token = req.cookies.token;
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, no token",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select("-password");

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Not authorized, token failed",
    });
  }
};


const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
};

const checkDepartmentAccess = async (req, res, next) => {
  const { role, department, permissions } = req.user;

  if (role === "superadmin") {
    return next();
  }

  const resourceDepartment =
    req.body.department || req.params.department || req.query.department;

  if (
    role === "admin" &&
    !department.equals(new mongoose.Types.ObjectId(resourceDepartment))
  ) {
    return res
      .status(403)
      .json({ success: false, message: "Access denied to this department" });
  }

  if (role === "user") {
    if (!permissions.read && req.method === "GET") {
      return res
        .status(403)
        .json({ success: false, message: "No read access" });
    }

    if (!permissions.create && req.method === "POST") {
      return res
        .status(403)
        .json({ success: false, message: "No create access" });
    }

    if (!permissions.update && req.method === "PATCH") {
      return res
        .status(403)
        .json({ success: false, message: "No update access" });
    }

    if (!permissions.delete && req.method === "DELETE") {
      return res
        .status(403)
        .json({ success: false, message: "No delete access" });
    }

    if (!department.equals(new mongoose.Types.ObjectId(resourceDepartment))) {
      return res
        .status(403)
        .json({ success: false, message: "Access denied to this department" });
    }
  }

  next();
};

module.exports = { protect, authorize, checkDepartmentAccess };
