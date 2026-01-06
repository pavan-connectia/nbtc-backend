const QualificationLoc = require("../models/qualifictaionLocationModel");

const createQualificationLocController = async (req, res) => {
  try {
    const qualificationLoc = new QualificationLoc(req.body);
    const savedQualificationLoc = await qualificationLoc.save();
    res.status(201).json({
      success: true,
      message: "QualificationLoc inserted successfully",
      data: savedQualificationLoc,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const getAllQualificationLocController = async (req, res) => {
  try {
    const { display } = req.query;

    const filter = display ? { display: display === "true" } : {};
    const qualification = await QualificationLoc.find(filter).sort({
      index: 1,
    });
    res.status(200).json({
      success: true,
      message: "Qualification Location fetched successfully",
      data: qualification,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const getQualificationLocByIdController = async (req, res) => {
  try {
    const qualificationLoc = await QualificationLoc.findById(req.params.id);
    if (!qualificationLoc) {
      return res
        .status(404)
        .json({ success: false, message: "Qualification Loccation not found" });
    }
    res.status(200).json({
      success: true,
      message: "Qualification Location fetched successfully",
      data: qualificationLoc,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const updateQualificationLocController = async (req, res) => {
  try {
    const { id } = req.params;
    const { index, ...updateData } = req.body;

    const updatedQualificationLoc = await QualificationLoc.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true },
    );

    if (!updatedQualificationLoc) {
      return res
        .status(404)
        .json({ message: "Qualification Location not found" });
    }

    if (index !== undefined) {
      const allQualificationLocs = await QualificationLoc.find().sort({
        index: 1,
      });
      const oldIndex = allQualificationLocs.findIndex(
        (t) => t._id.toString() === id,
      );
      const findNewIndex = await QualificationLoc.findOne({ index });

      if (!findNewIndex) {
        await QualificationLoc.findByIdAndUpdate(id, { index }, { new: true });
      } else {
        const tempQualificationLocs = [...allQualificationLocs];
        const [removedElement] = tempQualificationLocs.splice(oldIndex, 1);
        tempQualificationLocs.splice(index, 0, removedElement);

        await Promise.all(
          tempQualificationLocs.map(async (element, idx) => {
            return QualificationLoc.findByIdAndUpdate(
              element._id,
              { index: idx },
              { new: true },
            );
          }),
        );
      }
    }

    res.status(200).json({
      success: true,
      message: "Qualification Location updated successfully",
      data: updatedQualificationLoc,
    });
  } catch (error) {
    console.error("Error in Update Qualification Location: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const deleteQualificationLocController = async (req, res) => {
  try {
    const deletedQualificationLoc = await QualificationLoc.findByIdAndDelete(
      req.params.id,
    );
    if (!deletedQualificationLoc) {
      return res
        .status(404)
        .json({ success: false, message: "Qualification Location not found" });
    }
    res
      .status(200)
      .json({
        success: true,
        message: "Qualification Location deleted successfully",
      });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

module.exports = {
  createQualificationLocController,
  getAllQualificationLocController,
  getQualificationLocByIdController,
  updateQualificationLocController,
  deleteQualificationLocController,
};
