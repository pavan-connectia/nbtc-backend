const Qualification = require("../models/qualifictaionModel");

const createQualificationController = async (req, res) => {
  try {
    const qualification = new Qualification(req.body);
    const savedQualification = await qualification.save();
    res.status(201).json({
      success: true,
      message: "Qualification inserted successfully",
      data: savedQualification,
    });
  } catch (error) {
    
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const getAllQualificationController = async (req, res) => {
  try {
    const qualification = await Qualification.findOne().lean();
    res.status(200).json({
      success: true,
      message: "Qualification fetched successfully",
      data: qualification,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const getQualificationByIdController = async (req, res) => {
  try {
    const qualification = await Qualification.findById(req.params.id);
    if (!qualification) {
      return res
        .status(404)
        .json({ success: false, message: "Qualification not found" });
    }
    res.status(200).json({
      success: true,
      message: "Qualification fetched successfully",
      data: qualification,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const updateQualificationController = async (req, res) => {
  try {
    const { id } = req.params;
    const { index, ...updateData } = req.body;

    const updatedQualification = await Qualification.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedQualification) {
      return res.status(404).json({ message: "Qualification not found" });
    }

    if (index !== undefined) {
      const allQualifications = await Qualification.find().sort({ index: 1 });
      const oldIndex = allQualifications.findIndex(
        (t) => t._id.toString() === id
      );
      const findNewIndex = await Qualification.findOne({ index });

      if (!findNewIndex) {
        await Qualification.findByIdAndUpdate(id, { index }, { new: true });
      } else {
        const tempQualifications = [...allQualifications];
        const [removedElement] = tempQualifications.splice(oldIndex, 1);
        tempQualifications.splice(index, 0, removedElement);

        await Promise.all(
          tempQualifications.map(async (element, idx) => {
            return Qualification.findByIdAndUpdate(
              element._id,
              { index: idx },
              { new: true }
            );
          })
        );
      }
    }

    res.status(200).json({
      success: true,
      message: "Qualification updated successfully",
      data: updatedQualification,
    });
  } catch (error) {
    console.error("Error in Update Qualification: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const deleteQualificationController = async (req, res) => {
  try {
    const deletedQualification = await Qualification.findByIdAndDelete(
      req.params.id
    );
    if (!deletedQualification) {
      return res
        .status(404)
        .json({ success: false, message: "Qualification not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Qualification deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

module.exports = {
  createQualificationController,
  getAllQualificationController,
  getQualificationByIdController,
  updateQualificationController,
  deleteQualificationController,
};
