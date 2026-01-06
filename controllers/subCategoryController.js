const Category = require("../models/categoryModel");
const SubCategory = require("../models/subCategoryModel");

const createSubCategoryController = async (req, res) => {
  try {
    const subCategory = new SubCategory(req.body);
    const savedSubCategory = await subCategory.save();
    res.status(201).json({
      success: true,
      message: "SubCategory inserted successfully",
      data: savedSubCategory,
    });
  } catch (error) {
    
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const getAllSubCategoryController = async (req, res) => {
  try {
    const subCategory = await SubCategory.find().populate("department", "name");
    res.status(200).json({
      success: true,
      message: "SubCategory fetched successfully",
      data: subCategory,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const getSubCategoryByDepartment = async (req, res) => {
  try {
    const { name } = req.query;

    const subCategory = await SubCategory.find()
      .populate({
        path: "department",
        select: "title href",
      })
      .exec();

    const filteredQualifications = subCategory.filter(
      (subCategory) =>
        subCategory.department && subCategory.department.href === name
    );

    res.status(200).json({
      success: true,
      message: "SubCategory fetched successfully",
      data: filteredQualifications,
    });
  } catch (error) {
    console.error("Error in getSubCategoryByDepartment: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const getSubCategoryByFeaturedPopular = async (req, res) => {
  try {
    const filter = {
      department: req.params.id,
      display: true,
      $or: [{ featured: true }, { popular: true }],
    };

    const equipments = await SubCategory.find(filter)
      .populate("department", "title href")
      .populate("category", "name href")
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
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const getSubCategoryByFeaturedPopularByDeptId = async (req, res) => {
  try {
    const { id } = req.params;
    const filter = {
      display: true,
      $or: [{ featured: true }, { popular: true }],
      department: id,
    };

    const equipments = await SubCategory.find(filter)
      .populate("department", "title href")
      .populate("category", "name href")
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
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const getSubCategoryByIdController = async (req, res) => {
  try {
    const equipment = await SubCategory.findById(req.params.id).populate(
      "category",
      "name href"
    );

    if (!equipment) {
      return res.status(404).json({
        success: false,
        message: "Equipment not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Equipment fetched successfully",
      data: equipment,
    });
  } catch (error) {
    
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const getSubCategoryByDepartmentId = async (req, res) => {
  try {
    const subCategory = await SubCategory.find({
      department: req.params.id,
    }).populate("category", "name href");
    if (!subCategory) {
      return res
        .status(404)
        .json({ success: false, message: "SubCategory not found" });
    }
    res.status(200).json({
      success: true,
      message: "SubCategory fetched successfully",
      data: subCategory,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const getSubCategoryByCategory = async (req, res) => {
  try {
    const { display, category: categorySlug } = req.query;

    if (!categorySlug) {
      return res.status(400).json({
        success: false,
        message: "Category slug is required",
      });
    }

    const category = await Category.findOne({ href: categorySlug });

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    const filter = { category: category._id };
    if (display !== undefined) {
      filter.display = display === "true";
    }

    const subcategories = await SubCategory.find(filter)
      .populate("department", "name")
      .populate("category", "name href")
      .sort({ index: 1 });

    res.status(200).json({
      success: true,
      message: "Subcategories fetched successfully",
      data: subcategories,
    });
  } catch (error) {
    console.error("Error in getSubCategoryByCategory:", error.message);
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const updateSubCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const { ...updateData } = req.body;

    const updatedSubCategory = await SubCategory.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "SubCategory updated successfully",
      data: updatedSubCategory,
    });
  } catch (error) {
    console.error("Error in Update SubCategory: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const deleteSubCategoryController = async (req, res) => {
  try {
    const deletedSubCategory = await SubCategory.findByIdAndDelete(
      req.params.id
    );
    if (!deletedSubCategory) {
      return res
        .status(404)
        .json({ success: false, message: "SubCategory not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "SubCategory deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

module.exports = {
  createSubCategoryController,
  getAllSubCategoryController,
  getSubCategoryByDepartment,
  getSubCategoryByFeaturedPopular,
  getSubCategoryByFeaturedPopularByDeptId,
  getSubCategoryByIdController,
  getSubCategoryByDepartmentId,
  getSubCategoryByCategory,
  updateSubCategoryController,
  deleteSubCategoryController,
};
