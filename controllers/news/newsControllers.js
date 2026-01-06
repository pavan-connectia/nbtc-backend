const News = require("../../models/news/newsModel");

const createNewsController = async (req, res) => {
  try {
    const newNews = new News(req.body);
    await newNews.save();

    res.status(201).json({
      success: true,
      message: "News created successfully",
      data: newNews,
    });
  } catch (error) {
    console.error("Error", error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",error:error.message
    });
  }
};

const getAllNewsController = async (req, res) => {
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

    const news = await News.find(filter).sort({ date: -1 }).populate("department","name href");;
    res.status(200).json({
      success: true,
      message: "News fetched successfully",
      data: news,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getNewsByIdController = async (req, res) => {
  try {
    const news = await News.findOne({ href: req.params.id });

    if (!news) {
      return res.status(404).json({
        success: false,
        message: "News not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "News fetched successfully",
      data: news,
    });
  } catch (error) {
    
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateNewsController = async (req, res) => {
  try {
    const updatedNews = await News.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedNews) {
      return res
        .status(404)
        .json({ success: false, message: "News not found" });
    }

    res.status(200).json({
      success: true,
      message: "News updated successfully",
      data: updatedNews,
    });
  } catch (error) {
    console.error("Error", error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",error:error.message
    });
  }
};

const deleteNewsController = async (req, res) => {
  try {
    const deletedNews = await News.findByIdAndDelete(req.params.id);

    if (!deletedNews) {
      return res.status(404).json({
        success: false,
        message: "News not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "News deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",error:error.message
    });
  }
};

const getNewsByDepartment = async (req, res) => {
  const { id } = req.params;

  try {
    const news = await News.find({ department: id }).sort({ createdAt: -1 });

    if (!news) {
      return res.status(404).json({ success: false, message: "No news found" });
    }

    res.status(200).json({
      success: true,
      message: "News fetched successfully",
      data: news,
    });
  } catch (error) {
    
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  createNewsController,
  getAllNewsController,
  getNewsByIdController,
  updateNewsController,
  deleteNewsController,
  getNewsByDepartment,
};
