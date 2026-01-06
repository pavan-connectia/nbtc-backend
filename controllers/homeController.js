const Home = require("../models/homeModel");
const NodeCache = require("node-cache");

const cache = new NodeCache();

const createHomeController = async (req, res) => {
  try {
    const home = new Home(req.body);
    const savedHome = await home.save();

    cache.del("homes");
    res.status(201).json({
      success: true,
      data: savedHome,
      message: "Home data inserted successfully",
    });
  } catch (error) {
    console.error("Create Home Error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getAllHomeController = async (req, res) => {
  try {
    const cachedHome = cache.get("home");
    let home;

    if (cachedHome) {
      home = JSON.parse(cachedHome);
    } else {
      home = await Home.findOne().lean();
      if (home) {
        cache.set("home", JSON.stringify(home));
      }
    }

    res.status(200).json({
      success: true,
      message: "Home data fetched successfully",
      data: home,
    });
  } catch (error) {
    console.error("Get Home Error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateHomeController = async (req, res) => {
  try {
    const updatedHome = await Home.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedHome) {
      return res
        .status(404)
        .json({ success: false, message: "Home data not found" });
    }

    cache.del("home");

    res.status(200).json({
      success: true,
      message: "Home data updated successfully",
      data: updatedHome,
    });
  } catch (error) {
    console.error("Update Home Error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const deleteHomeController = async (req, res) => {
  try {
    const deletedHome = await Home.findByIdAndDelete(req.params.id);
    if (!deletedHome) {
      return res
        .status(404)
        .json({ success: false, message: "Home data not found" });
    }

    cache.del("homes");

    res
      .status(200)
      .json({ success: true, message: "Home data deleted successfully" });
  } catch (error) {
    console.error("Delete Home Error:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  createHomeController,
  getAllHomeController,
  updateHomeController,
  deleteHomeController,
};
