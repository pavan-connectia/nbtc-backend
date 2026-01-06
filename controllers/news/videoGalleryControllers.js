const VideoGallery = require("../../models/news/videoGalleryModel");

const createVideoGalleryController = async (req, res) => {
  try {
    const newVideoGallery = new VideoGallery(req.body);
    await newVideoGallery.save();
    res.status(201).json({
      success: true,
      message: "Video gallery created successfully",
      data: newVideoGallery,
    });
  } catch (error) {
    
    res.status(500).json({
      success: false,
      message: "Internal server error",error:error.message
    });
  }
};

const getAllVideoGalleryController = async (req, res) => {
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

    const imgGallery = await VideoGallery.find(filter).sort({ index: 1 });
    res.status(200).json({
      success: true,
      message: "Video gallery fetched successfully",
      data: imgGallery,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getVideoGalleryByDepartmentController = async (req, res) => {
  const { id } = req.params;

  try {
    const videoGallery = await VideoGallery.find({ department: id });

    if (!videoGallery) {
      return res.status(404).json({
        success: false,
        message: "No videoGallery found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Video Gallery fetched successfully",
      data: videoGallery,
    });
  } catch (error) {
    
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getVideoGalleryByIdController = async (req, res) => {
  try {
    const imgGallery = await VideoGallery.findById(req.params.id);

    if (!imgGallery) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }

    res.status(200).json({
      success: true,
      data: imgGallery,
      message: "Data fetched successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateVideoGalleryController = async (req, res) => {
  try {
    const { id } = req.params;
    const { index, ...updateData } = req.body;

    const updatedVideoGallery = await VideoGallery.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true },
    );

    if (!updatedVideoGallery) {
      return res.status(404).json({ message: "Video gallery not found" });
    }

    if (index !== undefined) {
      const allVideoGallerys = await VideoGallery.find().sort({ index: 1 });
      const oldIndex = allVideoGallerys.findIndex(
        (t) => t._id.toString() === id,
      );
      const findNewIndex = await VideoGallery.findOne({ index });

      if (!findNewIndex) {
        await VideoGallery.findByIdAndUpdate(id, { index }, { new: true });
      } else {
        const tempVideoGallerys = [...allVideoGallerys];
        const [removedElement] = tempVideoGallerys.splice(oldIndex, 1);
        tempVideoGallerys.splice(index, 0, removedElement);

        await Promise.all(
          tempVideoGallerys.map(async (element, idx) => {
            return VideoGallery.findByIdAndUpdate(
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
      message: "Video gallery updated successfully",
      data: updatedVideoGallery,
    });
  } catch (error) {
    
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const deleteVideoGalleryController = async (req, res) => {
  try {
    const deletedVideoGallery = await VideoGallery.findByIdAndDelete(
      req.params.id,
    );

    if (!deletedVideoGallery) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }

    res.status(200).json({
      success: false,
      message: "Data deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",error:error.message
    });
  }
};

module.exports = {
  createVideoGalleryController,
  getAllVideoGalleryController,
  getVideoGalleryByDepartmentController,
  getVideoGalleryByIdController,
  updateVideoGalleryController,
  deleteVideoGalleryController,
};
