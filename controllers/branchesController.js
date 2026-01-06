const Branches = require("../models/branchesModel");

const createBranchesController = async (req, res) => {
  try {
    const branches = new Branches(req.body);
    const savedBranches = await branches.save();
    res.status(201).json({
      success: true,
      message: "Branches inserted successfully",
      data: savedBranches,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getAllBranchesController = async (req, res) => {
  try {
    const branchess = await Branches.find();
    res.status(200).json({
      success: true,
      message: "Branches fetched successfully",
      data: branchess,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getBranchesByNameController = async (req, res) => {
  try {
    const branches = await Branches.findOne({
      href: { $regex: new RegExp(`^${req.params.name}$`, "i") },
    });
    if (!branches) {
      return res
        .status(404)
        .json({ success: false, message: "Branches not found" });
    }
    res.status(200).json({
      success: true,
      message: "Branches fetched successfully",
      data: branches,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateBranchesController = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedBranches = await Branches.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedBranches) {
      return res.status(404).json({ message: "Branches not found" });
    }

    res.status(200).json({
      success: true,
      message: "Branches updated successfully",
      data: updatedBranches,
    });
  } catch (error) {
    console.error("Error in Update Branches: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const deleteBranchesController = async (req, res) => {
  try {
    const deletedBranches = await Branches.findByIdAndDelete(req.params.id);
    if (!deletedBranches) {
      return res
        .status(404)
        .json({ success: false, message: "Branches not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Branches deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  createBranchesController,
  getAllBranchesController,
  getBranchesByNameController,
  updateBranchesController,
  deleteBranchesController,
};
