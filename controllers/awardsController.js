const Awards = require("../models/awardsModel");

const createAwards = async (req, res) => {
  try {
    const awards = new Awards(req.body);
    const savedAwards = await awards.save();
    res.status(201).json({
      success: true,
      message: "Awards inserted successfully",
      data: savedAwards,
    });
  } catch (error) {
    
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getAllAwards = async (req, res) => {
  const { display, showInMain, requested } = req.query;
  const filter = {};

  if (display) {
    filter.display = display === "true";
  }

  if (showInMain) {
    filter.showInMain = showInMain === "true";
  }

  if (requested) {
    filter.requested = requested === "true";
  }

  try {
    const awards = await Awards.find(filter).populate(
      "department",
      "name href"
    );
    res.status(200).json({
      success: true,
      message: "Awards fetched successfully",
      data: awards,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getAwardsByDepartment = async (req, res) => {
  const { display } = req.query;
  const filter = { department: { $in: [req.params.id] } };

  if (display) {
    filter.display = display === "true";
  }
  try {
    const awards = await Awards.find(filter);
    res.status(200).json({
      success: true,
      message: "Awards fetched successfully",
      data: awards,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getAwardsById = async (req, res) => {
  try {
    const awards = await Awards.findById(req.params.id);
    if (!awards) {
      return res
        .status(404)
        .json({ success: false, message: "Awards not found" });
    }
    res.status(200).json({
      success: true,
      message: "Awards fetched successfully",
      data: awards,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateAwards = async (req, res) => {
  try {
    const updatedAwards = await Awards.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedAwards) {
      return res
        .status(404)
        .json({ success: false, message: "Awards not found" });
    }
    res.status(200).json({
      success: true,
      data: updatedAwards,
      message: "Awards updated successfully",
    });
  } catch (error) {
    
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const deleteAwards = async (req, res) => {
  try {
    const deletedAwards = await Awards.findByIdAndDelete(req.params.id);
    if (!deletedAwards) {
      return res
        .status(404)
        .json({ success: false, message: "Awards not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Awards deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  createAwards,
  getAllAwards,
  getAwardsByDepartment,
  getAwardsById,
  updateAwards,
  deleteAwards,
};
