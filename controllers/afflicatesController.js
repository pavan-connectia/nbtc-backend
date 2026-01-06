const Afflicates = require("../models/afflicatesModel");

const createAfflicatesController = async (req, res) => {
  try {
    const afflicates = new Afflicates(req.body);
    const savedAfflicates = await afflicates.save();
    res.status(201).json({
      success: true,
      message: "Afflicates inserted successfully",
      data: savedAfflicates,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getAllAfflicatesController = async (req, res) => {
  try {
    const { display } = req.query;

    const filter = display ? { display: display === "true" } : {};
    const afflicatess = await Afflicates.find(filter).sort({ index: 1 });
    res.status(200).json({
      success: true,
      message: "Afflicates fetched successfully",
      data: afflicatess,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getAfflicatesByIdController = async (req, res) => {
  try {
    const afflicates = await Afflicates.findById(req.params.id);
    if (!afflicates) {
      return res
        .status(404)
        .json({ success: false, message: "Afflicates not found" });
    }
    res.status(200).json({
      success: true,
      message: "Afflicates fetched successfully",
      data: afflicates,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateAfflicatesController = async (req, res) => {
  try {
    const { id } = req.params;
    const { index, ...updateData } = req.body;

    const updatedAfflicates = await Afflicates.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true },
    );

    if (!updatedAfflicates) {
      return res.status(404).json({ message: "Afflicates not found" });
    }

    if (index !== undefined) {
      const allAfflicatess = await Afflicates.find().sort({ index: 1 });
      const oldIndex = allAfflicatess.findIndex((t) => t._id.toString() === id);
      const findNewIndex = await Afflicates.findOne({ index });

      if (!findNewIndex) {
        await Afflicates.findByIdAndUpdate(id, { index }, { new: true });
      } else {
        const tempAfflicatess = [...allAfflicatess];
        const [removedElement] = tempAfflicatess.splice(oldIndex, 1);
        tempAfflicatess.splice(index, 0, removedElement);

        await Promise.all(
          tempAfflicatess.map(async (element, idx) => {
            return Afflicates.findByIdAndUpdate(
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
      message: "Afflicates updated successfully",
      data: updatedAfflicates,
    });
  } catch (error) {
    console.error("Error in Update Afflicates: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const deleteAfflicatesController = async (req, res) => {
  try {
    const deletedAfflicates = await Afflicates.findByIdAndDelete(req.params.id);
    if (!deletedAfflicates) {
      return res
        .status(404)
        .json({ success: false, message: "Afflicates not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Afflicates deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  createAfflicatesController,
  getAllAfflicatesController,
  getAfflicatesByIdController,
  updateAfflicatesController,
  deleteAfflicatesController,
};
