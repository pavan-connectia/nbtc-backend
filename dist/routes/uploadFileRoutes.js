"use strict";

var express = require("express");
var multer = require("multer");
var path = require("path");
var fs = require("fs");
var router = express.Router();
var fileStorage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    var folderPath = req.query.folder || "uploads/files";
    var uploadDir = path.join(__dirname, "../".concat(folderPath));
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, {
        recursive: true
      });
    }
    cb(null, uploadDir);
  },
  filename: function filename(req, file, cb) {
    var uniqueName = "".concat(Date.now(), "-").concat(Math.round(Math.random() * 1e9)).concat(path.extname(file.originalname));
    cb(null, uniqueName);
  }
});
var fileFilter = function fileFilter(req, file, cb) {
  var allowedTypes = /pdf|doc|docx|ppt|pptx|xls|xlsx|txt/;
  var extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  var mimeType = allowedTypes.test(file.mimetype);
  if (extName && mimeType) {
    return cb(null, true);
  } else {
    cb(new Error("Unsupported file type"));
  }
};
var uploadFile = multer({
  storage: fileStorage,
  limits: {
    fileSize: 5 * 1024 * 1024
  },
  fileFilter: fileFilter
});
router.post("/upload-file", uploadFile.single("file"), function (req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded"
      });
    }
    var folderPath = req.query.folder || "uploads/files";
    res.status(200).json({
      success: true,
      message: "File uploaded successfully",
      filePath: "".concat(folderPath, "/").concat(req.file.filename)
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});
module.exports = router;