const MilestonesDept = require("../models/milestonesDeptModel");

const createMilestonesDeptController = async (req, res) => {
  try {
    const milestones = new MilestonesDept(req.body);
    const savedMilestonesDept = await milestones.save();
    res.status(201).json({
      success: true,
      data: savedMilestonesDept,
      message: "Milestone inserted successfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
  }
};

const getAllMilestonesDeptController = async (req, res) => {
  try {
    const { display } = req.query;

    const filter = display ? { display: display === "true" } : {};
    const milestoness = await MilestonesDept.find(filter).sort({ year: 1 });
    res.status(200).json({
      success: true,
      message: "Milestones department fetched successfully",
      data: milestoness,
    });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
  }
};

const getMilestonesDeptByDepartment = async (req, res) => {
  try {
    const { display } = req.query;
    const filter = { department: req.params.id };
    if (display) {
      filter.display = display === "true";
    }
    const milestoness = await MilestonesDept.find(filter).sort({ year: 1 });
    res.status(200).json({
      success: true,
      message: "Milestones department fetched successfully",
      data: milestoness,
    });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
  }
};

const getMilestonesDeptByIdController = async (req, res) => {
  try {
    const milestones = await MilestonesDept.findById(req.params.id);
    if (!milestones) {
      return res
        .status(404)
        .json({ success: false, message: "Milestones department not found" });
    }
    res.status(200).json({
      success: true,
      message: "Milestones department fetched successfully",
      data: milestones,
    });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
  }
};

const updateMilestonesDeptController = async (req, res) => {
  try {
    const updatedMilestonesDept = await MilestonesDept.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedMilestonesDept) {
      return res
        .status(404)
        .json({ success: false, message: "Milestones department not found" });
    }
    res.status(200).json({
      success: true,
      message: "Milestones department updated successfully",
      data: updatedMilestonesDept,
    });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
  }
};

const deleteMilestonesDeptController = async (req, res) => {
  try {
    const deletedMilestonesDept = await MilestonesDept.findByIdAndDelete(
      req.params.id
    );
    if (!deletedMilestonesDept) {
      return res
        .status(404)
        .json({ success: false, message: "Milestones department not found" });
    }
    res.status(200).json({
      success: true,
      message: "Milestones department deleted successfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
  }
};

module.exports = {
  createMilestonesDeptController,
  getAllMilestonesDeptController,
  getMilestonesDeptByDepartment,
  getMilestonesDeptByIdController,
  updateMilestonesDeptController,
  deleteMilestonesDeptController,
};
