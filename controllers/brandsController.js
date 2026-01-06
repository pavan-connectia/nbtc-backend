const Brands = require("../models/brandsModel");

const createBrandsController = async (req, res) => {
  try {
    const brands = new Brands(req.body);
    const savedBrands = await brands.save();
    res.status(201).json({
      success: true,
      message: "Brands inserted successfully",
      data: savedBrands,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getAllBrandsController = async (req, res) => {
  try {
    const { display } = req.query;

    const filter = display ? { display: display === "true" } : {};
    const brandss = await Brands.find(filter)
      .sort({ index: 1 })
      .populate("department", "name href");
    res.status(200).json({
      success: true,
      message: "Brands fetched successfully",
      data: brandss,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getBrandsByIdController = async (req, res) => {
  try {
    const brand = await Brands.findById(req.params.id);
    if (!brand) {
      return res.status(404).json({
        success: false,
        message: "Brand not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Brand fetched successfully",
      data: brand,
    });
  } catch (error) {
    console.error("Error in getBrandsByIdController:", error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",error:error.message
    });
  }
};

const updateBrandsController = async (req, res) => {
  try {
    const { id } = req.params;
    const { index, ...updateData } = req.body;

    const updatedBrands = await Brands.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedBrands) {
      return res.status(404).json({ message: "Brands not found" });
    }

    if (index !== undefined) {
      const allBrandss = await Brands.find().sort({ index: 1 });
      const oldIndex = allBrandss.findIndex((t) => t._id.toString() === id);
      const findNewIndex = await Brands.findOne({ index });

      if (!findNewIndex) {
        await Brands.findByIdAndUpdate(id, { index }, { new: true });
      } else {
        const tempBrandss = [...allBrandss];
        const [removedElement] = tempBrandss.splice(oldIndex, 1);
        tempBrandss.splice(index, 0, removedElement);

        await Promise.all(
          tempBrandss.map(async (element, idx) => {
            return Brands.findByIdAndUpdate(
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
      message: "Brands updated successfully",
      data: updatedBrands,
    });
  } catch (error) {
    console.error("Error in Update Brands: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const deleteBrandsController = async (req, res) => {
  try {
    const deletedBrands = await Brands.findByIdAndDelete(req.params.id);
    if (!deletedBrands) {
      return res
        .status(404)
        .json({ success: false, message: "Brands not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Brands deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getBrandsByDepartmentId = async (req, res) => {
  try {
    const { display } = req.query;
    const filter = { department: req.params.id };
    if (display) {
      filter.display = display === "true";
    }
    const brandss = await Brands.find(filter).sort({ index: 1 });
    res.status(200).json({
      success: true,
      message: "Brands fetched successfully",
      data: brandss,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  createBrandsController,
  getAllBrandsController,
  getBrandsByIdController,
  updateBrandsController,
  deleteBrandsController,
  getBrandsByDepartmentId,
};
