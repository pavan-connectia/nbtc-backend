const Publication = require("../../models/news/publicationModel");

const createPublicationController = async (req, res) => {
  try {
    const newPublication = new Publication(req.body);

    const savedPublication = await newPublication.save();
    res.status(201).json({
      success: true,
      message: "Publication created successfully",
      data: savedPublication,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",error:error.message
    });
  }
};

const getAllPublicationController = async (req, res) => {
  try {
      const { display, showInMain, requested } = req.query;
    let filter = {};

    if (showInMain) {
      filter.showInMain = showInMain === "true";
    }

    if (requested) {
      filter.requested = requested === "true";
    }

    if (display) {
      filter.display = display === "true";
    }

    const publication = await Publication.find(filter).sort({ index: 1 }).populate("department", "name href");
    res.status(200).json({
      success: true,
      message: "Publication fetched successfully",
      data: publication,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getPublicationByIdController = async (req, res) => {
  try {
    const publication = await Publication.findById(req.params.id);

    if (!publication) {
      return res.status(404).json({
        success: false,
        message: "Publication not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Publication fetched successfully",
      data: publication,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updatePublicationController = async (req, res) => {
  try {
    const { id } = req.params;
    const { index, ...updateData } = req.body;

    const updatedPublication = await Publication.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true },
    );

    if (!updatedPublication) {
      return res.status(404).json({ message: "Publication not found" });
    }

    if (index !== undefined) {
      const allPublications = await Publication.find().sort({ index: 1 });
      const oldIndex = allPublications.findIndex(
        (t) => t._id.toString() === id,
      );
      const findNewIndex = await Publication.findOne({ index });

      if (!findNewIndex) {
        await Publication.findByIdAndUpdate(id, { index }, { new: true });
      } else {
        const tempPublications = [...allPublications];
        const [removedElement] = tempPublications.splice(oldIndex, 1);
        tempPublications.splice(index, 0, removedElement);

        await Promise.all(
          tempPublications.map(async (element, idx) => {
            return Publication.findByIdAndUpdate(
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
      message: "Publication updated successfully",
      data: updatedPublication,
    });
  } catch (error) {
    console.error("Error in Update Publication: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const deletePublicationController = async (req, res) => {
  try {
    const deletedPublication = await Publication.findByIdAndDelete(
      req.params.id,
    );

    if (!deletedPublication) {
      return res.status(404).json({
        success: false,
        message: "Publication not found",
      });
    }

    res.status(200).json({
      success: false,
      message: "Publication deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",error:error.message
    });
  }
};

const getPublicationByDepartment = async (req, res) => {
  const { id } = req.params;

  try {
    const publication = await Publication.find({ department: id });

    if (!publication) {
      return res.status(404).json({
        success: false,
        message: "No publication found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Publication fetched successfully",
      data: publication,
    });
  } catch (error) {
    
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  createPublicationController,
  getAllPublicationController,
  getPublicationByIdController,
  updatePublicationController,
  deletePublicationController,
  getPublicationByDepartment,
};
