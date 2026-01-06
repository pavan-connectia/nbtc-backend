const Region = require("../models/regionModel");

const createRegion = async (req, res) => {
  try {
    const region = new Region(req.body);
    const savedRegion = await region.save();
    res.status(201).json({
      success: true,
      message: "Region inserted successfully",
      data: savedRegion,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const getAllRegion = async (req, res) => {
  try {
    const region = await Region.find();
    res.status(200).json({
      success: true,
      message: "Region fetched successfully",
      data: region,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const getRegionByRegion = async (req, res) => {
  const filter = { href: req.params.id };

  try {
    const region = await Region.findOne(filter);
    res.status(200).json({
      success: true,
      message: "Region fetched successfully",
      data: region,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const getRegionById = async (req, res) => {
  try {
    const region = await Region.findById(req.params.id);
    if (!region) {
      return res
        .status(404)
        .json({ success: false, message: "Region not found" });
    }
    res.status(200).json({
      success: true,
      message: "Region fetched successfully",
      data: region,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const updateRegion = async (req, res) => {
  try {
    const updatedRegion = await Region.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!updatedRegion) {
      return res
        .status(404)
        .json({ success: false, message: "Region not found" });
    }
    res.status(200).json({
      success: true,
      data: updatedRegion,
      message: "Region updated successfully",
    });
  } catch (error) {
    
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const deleteRegion = async (req, res) => {
  try {
    const deletedRegion = await Region.findByIdAndDelete(req.params.id);
    if (!deletedRegion) {
      return res
        .status(404)
        .json({ success: false, message: "Region not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Region deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

module.exports = {
  createRegion,
  getAllRegion,
  getRegionByRegion,
  getRegionById,
  updateRegion,
  deleteRegion,
};
