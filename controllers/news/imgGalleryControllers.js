const ImgGallery = require("../../models/news/imgGalleryModel");

const createImgGalleryController = async (req, res) => {
  try {
    const newImgGallery = new ImgGallery(req.body);

    const savedImgGallery = await newImgGallery.save();
    res.status(201).json({
      success: true,
      message: "Image gallery inserted successfully",
      data: savedImgGallery,
    });
  } catch (error) {
    
    res.status(500).json({
      success: false,
      message: "Internal server error",error:error.message
    });
  }
};

const insertManyImgGalleryController = async (req, res) => {
  try {
    const savedImgGallery = await ImgGallery.insertMany(req.body);
    res.status(201).json({
      success: true,
      message: "Image gallery inserted successfully",
      data: savedImgGallery,
    });
  } catch (error) {
    
    res.status(500).json({
      success: false,
      message: "Internal server error",error:error.message
    });
  }
};

const getAllImgGalleryController = async (req, res) => {
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

    const imgGallery = await ImgGallery.find(filter).sort({ index: 1 }).populate("department","name href");

    res.status(200).json({
      success: true,
      message: "Image gallery fetched successfully",
      data: imgGallery,
    });
  } catch (error) {
    console.error("Error fetching image gallery:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getImgGalleryByIdController = async (req, res) => {
  try {
    const imgGallery = await ImgGallery.findById(req.params.id);

    if (!imgGallery) {
      return res.status(404).json({
        success: false,
        message: "Image gallery not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Image gallery fetched successfully",
      data: imgGallery,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateImgGalleryController = async (req, res) => {
  try {
    const { id } = req.params;
    const { index, ...updateData } = req.body;

    const updatedImgGallery = await ImgGallery.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedImgGallery) {
      return res.status(404).json({ message: "Image gallery not found" });
    }

    if (index !== undefined) {
      const allImgGallerys = await ImgGallery.find().sort({ index: 1 });
      const oldIndex = allImgGallerys.findIndex((t) => t._id.toString() === id);
      const findNewIndex = await ImgGallery.findOne({ index });

      if (!findNewIndex) {
        await ImgGallery.findByIdAndUpdate(id, { index }, { new: true });
      } else {
        const tempImgGallerys = [...allImgGallerys];
        const [removedElement] = tempImgGallerys.splice(oldIndex, 1);
        tempImgGallerys.splice(index, 0, removedElement);

        await Promise.all(
          tempImgGallerys.map(async (element, idx) => {
            return ImgGallery.findByIdAndUpdate(
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
      message: "Image gallery updated successfully",
      data: updatedImgGallery,
    });
  } catch (error) {
    console.error("Error in Update Image Gallery: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const deleteImgGalleryController = async (req, res) => {
  try {
    const deletedImgGallery = await ImgGallery.findByIdAndDelete(req.params.id);

    if (!deletedImgGallery) {
      return res.status(404).json({
        success: false,
        message: "Image gallery not found",
      });
    }

    res.status(200).json({
      success: false,
      message: "Image gallery deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",error:error.message
    });
  }
};

const getImgGalleryByDepartment = async (req, res) => {
  const { id } = req.params;

  try {
    const imgGallery = await ImgGallery.find({ department: id });

    if (!imgGallery) {
      return res.status(404).json({
        success: false,
        message: "No imgGallery found for this title",
      });
    }

    res.status(200).json({
      success: true,
      message: "ImgGallery fetched successfully",
      data: imgGallery,
    });
  } catch (error) {
    
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  createImgGalleryController,
  insertManyImgGalleryController,
  getAllImgGalleryController,
  getImgGalleryByIdController,
  updateImgGalleryController,
  deleteImgGalleryController,
  getImgGalleryByDepartment,
};
