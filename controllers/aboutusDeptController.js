const AboutusDept = require("../models/aboutusDeptModel");

const createAboutusDeptController = async (req, res) => {
  try {
    const aboutus = new AboutusDept(req.body);
    const savedAboutusDept = await aboutus.save();
    res.status(201).json({
      success: true,
      message: "Aboutus Dept inserted successfully",
      data: savedAboutusDept,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getAllAboutusDeptController = async (req, res) => {
  try {
    const aboutuss = await AboutusDept.find();
    res.status(200).json({
      success: true,
      message: "AboutusDept fetched successfully",
      data: aboutuss,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getAboutusDeptByIdController = async (req, res) => {
  try {
    const aboutus = await AboutusDept.findOne({
      department: req.params.id,
    });
    if (!aboutus) {
      return res
        .status(404)
        .json({ success: false, message: "AboutusDept not found" });
    }
    res.status(200).json({
      success: true,
      message: "AboutusDept fetched successfully",
      data: aboutus,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateAboutusDeptController = async (req, res) => {
  try {
    const { id } = req.params;
    const { index, ...updateData } = req.body;

    const updatedAboutusDept = await AboutusDept.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedAboutusDept) {
      return res.status(404).json({ message: "AboutusDept not found" });
    }

    if (index !== undefined) {
      const allAboutusDepts = await AboutusDept.find().sort({ index: 1 });
      const oldIndex = allAboutusDepts.findIndex(
        (t) => t._id.toString() === id,
      );
      const findNewIndex = await AboutusDept.findOne({ index });

      if (!findNewIndex) {
        await AboutusDept.findByIdAndUpdate(id, { index }, { new: true });
      } else {
        const tempAboutusDepts = [...allAboutusDepts];
        const [removedElement] = tempAboutusDepts.splice(oldIndex, 1);
        tempAboutusDepts.splice(index, 0, removedElement);

        await Promise.all(
          tempAboutusDepts.map(async (element, idx) => {
            return AboutusDept.findByIdAndUpdate(
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
      message: "AboutusDept updated successfully",
      data: updatedAboutusDept,
    });
  } catch (error) {
    console.error("Error in Update AboutusDept: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const deleteAboutusDeptController = async (req, res) => {
  try {
    const deletedAboutusDept = await AboutusDept.findByIdAndDelete(
      req.params.id,
    );
    if (!deletedAboutusDept) {
      return res
        .status(404)
        .json({ success: false, message: "AboutusDept not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "AboutusDept deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  createAboutusDeptController,
  getAllAboutusDeptController,
  getAboutusDeptByIdController,
  updateAboutusDeptController,
  deleteAboutusDeptController,
};
