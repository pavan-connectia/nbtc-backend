const CareersOpening = require("../../models/careers/careersOpeningModel");

const createCareersOpeningController = async (req, res) => {
  try {
    const careersOpening = new CareersOpening(req.body);
    const savedCareersOpening = await careersOpening.save();
    res.status(201).json({
      success: true,
      message: "Careers opening created successfully",
      data: savedCareersOpening,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error", error: error.message });
  }
};

const getAllCareersOpeningController = async (req, res) => {
  try {
    const { display } = req.query;

    const filter = display ? { display: display === "true" } : {};
    const careersOpenings = await CareersOpening
      .find(filter)
      .populate("department", "name href");

    res.status(200).json({
      success: true,
      message: "Careers opening fetched successfully",
      data: careersOpenings,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error", error: error.message });
  }
};

const getCareersOpeningByIdController = async (req, res) => {
  try {
    const careersOpening = await CareersOpening.findById(req.params.id);
    if (!careersOpening) {
      return res
        .status(404)
        .json({ success: false, message: "Careers opening not found" });
    }
    res.status(200).json({
      success: true,
      message: "Careers opening fetched successfully",
      data: careersOpening,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error", error: error.message });
  }
};

const getCareersOpeningByDepartmentController = async (req, res) => {
  try {
    const careersOpening = await CareersOpening.find({
      department: req.params.id,
    });
    if (!careersOpening) {
      return res
        .status(404)
        .json({ success: false, message: "Careers opening not found" });
    }
    res.status(200).json({
      success: true,
      message: "Careers opening fetched successfully",
      data: careersOpening,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error", error: error.message });
  }
};

const updateCareersOpeningController = async (req, res) => {
  try {
    const updatedCareersOpening = await CareersOpening.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!updatedCareersOpening) {
      return res
        .status(404)
        .json({ success: false, message: "Careers opening not found" });
    }
    res.status(200).json({
      success: true,
      message: "Careers opening updated successfully",
      data: updatedCareersOpening,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error", error: error.message });
  }
};

const deleteCareersOpeningController = async (req, res) => {
  try {
    const deletedCareersOpening = await CareersOpening.findByIdAndDelete(
      req.params.id,
    );
    if (!deletedCareersOpening) {
      return res
        .status(404)
        .json({ success: false, message: "Careers opening not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Careers opening deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error", error: error.message });
  }
};

module.exports = {
  createCareersOpeningController,
  getAllCareersOpeningController,
  getCareersOpeningByIdController,
  getCareersOpeningByDepartmentController,
  updateCareersOpeningController,
  deleteCareersOpeningController,
};
