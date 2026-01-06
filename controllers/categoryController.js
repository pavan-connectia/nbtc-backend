const Category = require("../models/categoryModel");

const createCategoryController = async (req, res) => {
  try {
    const category = new Category(req.body);
    const savedCategory = await category.save();
    res.status(201).json({
      success: true,
      message: "Category inserted successfully",
      data: savedCategory,
    });
  } catch (error) {
    
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getAllCategoryController = async (req, res) => {
  try {
    const qualification = await Category.find().populate("department", "name");
    res.status(200).json({
      success: true,
      message: "Category fetched successfully",
      data: qualification,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getCategoryByDepartment = async (req, res) => {
  try {
    const { name } = req.query;

    const category = await Category.find()
      .populate({
        path: "department",
        select: "title href",
      })
      .exec();

    const filteredQualifications = category.filter(
      (qualification) =>
        qualification.department && qualification.department.href === name,
    );

    res.status(200).json({
      success: true,
      message: "Category fetched successfully",
      data: filteredQualifications,
    });
  } catch (error) {
    console.error("Error in getCategoryByDepartment: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getCategoryByIdController = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }
    res.status(200).json({
      success: true,
      message: "Category fetched successfully",
      data: category,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getCategoryByDepartmentId = async (req, res) => {
  try {
    const category = await Category.find({ department: req.params.id });
    if (!category) {
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }
    res.status(200).json({
      success: true,
      message: "Category fetched successfully",
      data: category,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const { ...updateData } = req.body;

    const updatedCategory = await Category.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      message: "Category updated successfully",
      data: updatedCategory,
    });
  } catch (error) {
    console.error("Error in Update Category: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const deleteCategoryController = async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory) {
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getCategoryByFeaturedPopular = async (req, res) => {
  try {
    const filter = {
      department: req.params.id,
      display: true,
      $or: [{ featured: true }, { popular: true }],
    };

    const equipments = await Category.find(filter)
      .populate("department", "title href")
      .sort({ index: 1 });

    if (!equipments || equipments.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No featured/popular equipment found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Equipments fetched successfully",
      data: equipments,
    });
  } catch (error) {
    console.error("Error fetching featured/popular equipment:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getCategoryByFeaturedPopularByDeptId = async (req, res) => {
  try {
    const { id } = req.params;
    const filter = {
      display: true,
      $or: [{ featured: true }, { popular: true }],
      department: id,
    };

    const equipments = await Category.find(filter)
      .populate("department", "title href")
      .sort({ index: 1 });

    if (!equipments || equipments.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No featured/popular equipment found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Equipments fetched successfully",
      data: equipments,
    });
  } catch (error) {
    console.error("Error fetching featured/popular equipment:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  getCategoryByFeaturedPopular,
  getCategoryByFeaturedPopularByDeptId,
  createCategoryController,
  getAllCategoryController,
  getCategoryByDepartment,
  getCategoryByIdController,
  getCategoryByDepartmentId,
  updateCategoryController,
  deleteCategoryController,
};
