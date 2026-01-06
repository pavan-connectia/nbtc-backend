const HomeDept = require("../models/homeDeptModel");
const NodeCache = require("node-cache");

const cache = new NodeCache();

const createHomeDeptController = async (req, res) => {
  try {
    const homeDept = new HomeDept(req.body);
    const savedHomeDept = await homeDept.save();

    res.status(201).json({
      success: true,
      data: savedHomeDept,
      message: "HomeDept data inserted successfully",
    });
  } catch (error) {
    console.error("Create HomeDept Error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getAllHomeDeptController = async (req, res) => {
  try {
    const homeDept = await HomeDept.find();

    res.status(200).json({
      success: true,
      message: "HomeDept data fetched successfully",
      data: homeDept,
    });
  } catch (error) {
    console.error("Get HomeDept Error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getHomeDeptByIdController = async (req, res) => {
  try {
    const cacheKey = `homeDept_${req.params.id}`;
    const cachedHomeDept = cache.get(cacheKey);

    if (cachedHomeDept) {
      return res.status(200).json({
        success: true,
        message: "HomeDept data fetched successfully from cache",
        data: cachedHomeDept,
      });
    }

    const homeDept = await HomeDept.findOne({ department: req.params.id });
    if (!homeDept) {
      return res
        .status(404)
        .json({ success: false, message: "HomeDept data not found" });
    }

    cache.set(cacheKey, homeDept.toObject());
    res.status(200).json({
      success: true,
      message: "HomeDept data fetched successfully",
      data: homeDept,
    });
  } catch (error) {
    console.error("Get HomeDept by ID Error:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateHomeDeptController = async (req, res) => {
  try {
    const cacheKeys = cache.keys();
    cacheKeys.forEach((key) => {
      if (key.startsWith("homeDept_")) cache.del(key);
    });

    const updatedHomeDept = await HomeDept.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedHomeDept) {
      return res
        .status(404)
        .json({ success: false, message: "HomeDept data not found" });
    }

    res.status(200).json({
      success: true,
      message: "HomeDept data updated successfully",
      data: updatedHomeDept,
    });
  } catch (error) {
    console.error("Update HomeDept Error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const deleteHomeDeptController = async (req, res) => {
  try {
    const cacheKeys = cache.keys();
    cacheKeys.forEach((key) => {
      if (key.startsWith("homeDept_")) cache.del(key);
    });

    const deletedHomeDept = await HomeDept.findByIdAndDelete(req.params.id);

    if (!deletedHomeDept) {
      return res
        .status(404)
        .json({ success: false, message: "HomeDept data not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "HomeDept data deleted successfully" });
  } catch (error) {
    console.error("Delete HomeDept Error:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  createHomeDeptController,
  getAllHomeDeptController,
  getHomeDeptByIdController,
  updateHomeDeptController,
  deleteHomeDeptController,
};
