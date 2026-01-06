const Aboutus = require("../models/aboutusModel");

const createAboutusController = async (req, res) => {
  try {
    const aboutus = new Aboutus(req.body);
    const savedAboutus = await aboutus.save();
    res.status(201).json({
      success: true,
      message: "Aboutus inserted successfully",
      data: savedAboutus,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getAllAboutusController = async (req, res) => {
  try {
    const aboutuss = await Aboutus.findOne();
    res.status(200).json({
      success: true,
      message: "Aboutus fetched successfully",
      data: aboutuss,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getAboutusByIdController = async (req, res) => {
  try {
    const aboutus = await Aboutus.findById(req.params.id);
    if (!aboutus) {
      return res
        .status(404)
        .json({ success: false, message: "Aboutus not found" });
    }
    res.status(200).json({
      success: true,
      message: "Aboutus fetched successfully",
      data: aboutus,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateAboutusController = async (req, res) => {
  try {
    const { id } = req.params;
    const { index, ...updateData } = req.body;

    const updatedAboutus = await Aboutus.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedAboutus) {
      return res.status(404).json({ message: "Aboutus not found" });
    }

    res.status(200).json({
      success: true,
      message: "Aboutus updated successfully",
      data: updatedAboutus,
    });
  } catch (error) {
    console.error("Error in Update Aboutus: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const deleteAboutusController = async (req, res) => {
  try {
    const deletedAboutus = await Aboutus.findByIdAndDelete(req.params.id);
    if (!deletedAboutus) {
      return res
        .status(404)
        .json({ success: false, message: "Aboutus not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Aboutus deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  createAboutusController,
  getAllAboutusController,
  getAboutusByIdController,
  updateAboutusController,
  deleteAboutusController,
};
