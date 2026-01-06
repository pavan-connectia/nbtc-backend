const CareersInfo = require("../../models/careers/careersInfoModel");

const createCareersInfoController = async (req, res) => {
  try {
    const careersInfo = new CareersInfo(req.body);
    const savedCareersInfo = await careersInfo.save();
    res.status(201).json({
      success: true,
      message: "Careers info created successfully",
      data: savedCareersInfo,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getAllCareersInfoController = async (req, res) => {
  try {
    const careersInfos = await CareersInfo.findOne();
    res.status(200).json({
      success: true,
      message: "Careers info fetched successfully",
      data: careersInfos,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getCareersInfoByIdController = async (req, res) => {
  try {
    const careersInfo = await CareersInfo.findById(req.params.id);
    if (!careersInfo) {
      return res
        .status(404)
        .json({ success: false, message: "Careers info not found" });
    }
    res.status(200).json({
      success: true,
      message: "Careers info fetched successfully",
      data: careersInfo,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateCareersInfoController = async (req, res) => {
  try {
    const updatedCareersInfo = await CareersInfo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!updatedCareersInfo) {
      return res
        .status(404)
        .json({ success: false, message: "Careers info not found" });
    }
    res.status(200).json({
      success: true,
      message: "Careers info updated successfully",
      data: updatedCareersInfo,
    });
  } catch (error) {
    
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const deleteCareersInfoController = async (req, res) => {
  try {
    const deletedCareersInfo = await CareersInfo.findByIdAndDelete(
      req.params.id,
    );
    if (!deletedCareersInfo) {
      return res
        .status(404)
        .json({ success: false, message: "Careers info not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Careers info deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  createCareersInfoController,
  getAllCareersInfoController,
  getCareersInfoByIdController,
  updateCareersInfoController,
  deleteCareersInfoController,
};
