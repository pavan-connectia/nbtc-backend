const Facility = require("../models/facilityModel");

const createFacilityController = async (req, res) => {
  try {
    const facility = new Facility(req.body);
    const savedFacility = await facility.save();
    res.status(201).json({
      success: true,
      message: "Facility inserted successfully",
      data: savedFacility,
    });
  } catch (error) {
    
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getAllFacilityController = async (req, res) => {
  try {
    const facility = await Facility.find().populate("department", "name");
    res.status(200).json({
      success: true,
      message: "Facility fetched successfully",
      data: facility,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getFacilityByIdController = async (req, res) => {
  try {
    const facility = await Facility.findById(req.params.id);
    if (!facility) {
      return res
        .status(404)
        .json({ success: false, message: "Facility not found" });
    }
    res.status(200).json({
      success: true,
      message: "Facility fetched successfully",
      data: facility,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getFacilityByDepartmentId = async (req, res) => {
  try {
    const facility = await Facility.find({ department: req.params.id });
    if (!facility) {
      return res
        .status(404)
        .json({ success: false, message: "Facility not found" });
    }
    res.status(200).json({
      success: true,
      message: "Facility fetched successfully",
      data: facility,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateFacilityController = async (req, res) => {
  try {
    const { id } = req.params;
    const { ...updateData } = req.body;

    const updatedFacility = await Facility.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      message: "Facility updated successfully",
      data: updatedFacility,
    });
  } catch (error) {
    console.error("Error in Update Facility: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const deleteFacilityController = async (req, res) => {
  try {
    const deletedFacility = await Facility.findByIdAndDelete(req.params.id);
    if (!deletedFacility) {
      return res
        .status(404)
        .json({ success: false, message: "Facility not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Facility deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  createFacilityController,
  getAllFacilityController,
  getFacilityByIdController,
  getFacilityByDepartmentId,
  updateFacilityController,
  deleteFacilityController,
};
