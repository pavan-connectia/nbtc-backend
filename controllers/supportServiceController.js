const SupportService = require("../models/supportServiceModel");

const createSupportServiceController = async (req, res) => {
  try {
    const supportService = new SupportService(req.body);
    const savedSupportService = await supportService.save();
    res.status(201).json({
      success: true,
      message: "Support service created successfully",
      data: savedSupportService,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const getAllSupportServiceController = async (req, res) => {
  try {
    const supportServices = await SupportService.findOne();
    res.status(200).json({
      success: true,
      message: "Support service fetched successfully",
      data: supportServices,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const getSupportServiceByIdController = async (req, res) => {
  try {
    const supportService = await SupportService.findById(req.params.id);
    if (!supportService) {
      return res
        .status(404)
        .json({ success: false, message: "Support service not found" });
    }
    res.status(200).json({
      success: true,
      message: "Support service fetched successfully",
      data: supportService,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const updateSupportServiceController = async (req, res) => {
  try {
    const updatedSupportService = await SupportService.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!updatedSupportService) {
      return res
        .status(404)
        .json({ success: false, message: "Support service not found" });
    }
    res.status(200).json({
      success: true,
      message: "Support service updated successfully",
      data: updatedSupportService,
    });
  } catch (error) {
    
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const deleteSupportServiceController = async (req, res) => {
  try {
    const deletedSupportService = await SupportService.findByIdAndDelete(
      req.params.id,
    );
    if (!deletedSupportService) {
      return res
        .status(404)
        .json({ success: false, message: "Support service not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Support service deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

module.exports = {
  createSupportServiceController,
  getAllSupportServiceController,
  getSupportServiceByIdController,
  updateSupportServiceController,
  deleteSupportServiceController,
};
