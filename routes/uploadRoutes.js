const express = require("express");
const multer = require("multer");
const Jimp = require("jimp");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded" });
    }

    const folderPath = req.query.folder || "uploads";
    const uploadDir = path.join(__dirname, `../${folderPath}`);

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // SEO-friendly title from query
    const imageTitle = req.query.title || "image";

    // Sanitize and shorten title
    const sanitizedTitle = imageTitle
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "") // Remove special characters
      .substring(0, 20); // Limit title length to 20 characters

    const uniqueId = crypto.randomBytes(3).toString("hex"); // 6-character unique ID
    const finalFileName = `${sanitizedTitle}-${uniqueId}.webp`;
    const finalFilePath = path.join(uploadDir, finalFileName);

    if (req.file.mimetype === "image/webp") {
      fs.writeFileSync(finalFilePath, req.file.buffer);

      return res.status(200).json({
        success: true,
        message: "WebP file uploaded successfully",
        filePath: `${folderPath}/${finalFileName}`,
      });
    }

    const image = await Jimp.read(req.file.buffer);
    await image.quality(96).writeAsync(finalFilePath);

    res.status(200).json({
      success: true,
      message: "File uploaded and converted to WebP successfully",
      filePath: `${folderPath}/${finalFileName}`,
    });
  } catch (error) {
    
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;