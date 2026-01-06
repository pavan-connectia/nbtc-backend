const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name can't be empty"],
    required: true,
  },
  email: {
    type: String,
    required: [true, "Email can't be empty"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password can't be empty"],
  },
  role: {
    type: String,
    enum: ["superadmin", "admin", "user"],
    required: true,
    default: "user",
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CoreBusiness",
    required: function () {
      return this.role !== "superadmin";
    },
  },

  permissions: {
    create: { type: Boolean, default: false },
    read: { type: Boolean, default: true },
    update: { type: Boolean, default: false },
    delete: { type: Boolean, default: false },
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.hasPermission = function (action) {
  return this.permissions[action];
};

userSchema.methods.assignPermissions = function (newPermissions) {
  this.permissions = newPermissions;
};

userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
