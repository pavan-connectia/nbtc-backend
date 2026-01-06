const Milestones = require("../models/milestonesModel");

const createMilestonesController = async (req, res) => {
  try {
    const milestones = new Milestones(req.body);
    const savedMilestones = await milestones.save();
    res.status(201).json({
      success: true,
      data: savedMilestones,
      message: "Milestone inserted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getAllMilestonesController = async (req, res) => {
  try {
    const { display } = req.query;

    const filter = display ? { display: display === "true" } : {};
    const milestoness = await Milestones.find(filter).sort({ year: 1 });
    res.status(200).json({
      success: true,
      message: "Milestones fetched successfully",
      data: milestoness,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getMilestonesByIdController = async (req, res) => {
  try {
    const milestones = await Milestones.findById(req.params.id);
    if (!milestones) {
      return res
        .status(404)
        .json({ success: false, message: "Milestones not found" });
    }
    res.status(200).json({
      success: true,
      message: "Milestones fetched successfully",
      data: milestones,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateMilestonesController = async (req, res) => {
  try {
    const updatedMilestones = await Milestones.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!updatedMilestones) {
      return res
        .status(404)
        .json({ success: false, message: "Milestones not found" });
    }
    res.status(200).json({
      success: true,
      message: "Milestones updated successfully",
      data: updatedMilestones,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const deleteMilestonesController = async (req, res) => {
  try {
    const deletedMilestones = await Milestones.findByIdAndDelete(req.params.id);
    if (!deletedMilestones) {
      return res
        .status(404)
        .json({ success: false, message: "Milestones not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Milestones deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  createMilestonesController,
  getAllMilestonesController,
  getMilestonesByIdController,
  updateMilestonesController,
  deleteMilestonesController,
};
