const Qhse = require("../models/qhseModel");

const createQhseController = async (req, res) => {
  try {
    const qhse = new Qhse(req.body);
    const savedQhse = await qhse.save();
    res.status(201).json({
      success: true,
      message: "Qhse inserted successfully",
      data: savedQhse,
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

const getAllQhseController = async (req, res) => {
  try {
    const qhses = await Qhse.findOne().sort();
    res.status(200).json({
      success: true,
      message: "Qhse fetched successfully",
      data: qhses,
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

const getQhseByIdController = async (req, res) => {
  try {
    const qhse = await Qhse.findById(req.params.id);
    if (!qhse) {
      return res
        .status(404)
        .json({ success: false, message: "Qhse not found" });
    }
    res.status(200).json({
      success: true,
      message: "Qhse fetched successfully",
      data: qhse,
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

const updateQhseController = async (req, res) => {
  try {
    const { id } = req.params;
    const { index, ...updateData } = req.body;

    const updatedQhse = await Qhse.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedQhse) {
      return res.status(404).json({ message: "Qhse not found" });
    }

    if (index !== undefined) {
      const allQhses = await Qhse.find().sort({ index: 1 });
      const oldIndex = allQhses.findIndex((t) => t._id.toString() === id);
      const findNewIndex = await Qhse.findOne({ index });

      if (!findNewIndex) {
        await Qhse.findByIdAndUpdate(id, { index }, { new: true });
      } else {
        const tempQhses = [...allQhses];
        const [removedElement] = tempQhses.splice(oldIndex, 1);
        tempQhses.splice(index, 0, removedElement);

        await Promise.all(
          tempQhses.map(async (element, idx) => {
            return Qhse.findByIdAndUpdate(
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
      message: "Qhse updated successfully",
      data: updatedQhse,
    });
  } catch (error) {
    console.error("Error in Update Qhse: ", error.message);
    res
      .status(500)
      .json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
  }
};

const deleteQhseController = async (req, res) => {
  try {
    const deletedQhse = await Qhse.findByIdAndDelete(req.params.id);
    if (!deletedQhse) {
      return res
        .status(404)
        .json({ success: false, message: "Qhse not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Qhse deleted successfully" });
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
  createQhseController,
  getAllQhseController,
  getQhseByIdController,
  updateQhseController,
  deleteQhseController,
};
