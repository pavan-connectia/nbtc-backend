const CoreBusiness = require("../models/coreBusinessModel");
const NodeCache = require("node-cache");
const cache = new NodeCache();

const addCoreBusiness = async (req, res) => {
  try {
    const newCoreBusiness = new CoreBusiness(req.body);

    await newCoreBusiness.save();
    cache.del("navbarCoreBusiness");

    res.status(201).json({
      success: true,
      message: "Core business item added successfully",
      data: newCoreBusiness,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add core business item",
      error: error.message,
    });
  }
};

const editCoreBusiness = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedCoreBusiness = await CoreBusiness.findByIdAndUpdate(
      id,
      updates,
      { new: true }
    );

    if (!updatedCoreBusiness) {
      return res.status(404).json({
        success: false,
        message: "Core business item not found",
      });
    }

    cache.del("navbarCoreBusiness");
    res.status(200).json({
      success: true,
      message: "Core business item updated successfully",
      data: updatedCoreBusiness,
    });
  } catch (error) {
    
    res.status(500).json({
      success: false,
      message: "Failed to update core business item",
      error,
    });
  }
};

const deleteCoreBusiness = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCoreBusiness = await CoreBusiness.findByIdAndDelete(id);

    if (!deletedCoreBusiness) {
      return res.status(404).json({
        success: false,
        message: "Core business item not found",
      });
    }

    cache.del("navbarCoreBusiness");
    res.status(200).json({
      success: true,
      message: "Core business item deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete core business item",
      error: error.message,
    });
  }
};

const getAllCoreBusinesses = async (req, res) => {
  try {
    const coreBusinesses = await CoreBusiness.find().sort({ index: 1 }).lean();

    res.status(200).json({
      success: true,
      data: coreBusinesses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch core business items",
      error: error.message,
    });
  }
};

const getCoreBusinessesByName = async (req, res) => {
  const { name } = req.params;
  try {
    const coreBusinesses = await CoreBusiness.find({ href: name }).lean();

    res.status(200).json({
      success: true,
      message: "Core business fetched successfully",
      data: coreBusinesses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch core business items",
      error: error.message,
    });
  }
};

const getCoreBusinessesById = async (req, res) => {
  const { id } = req.params;
  try {
    const coreBusinesses = await CoreBusiness.findById(id).lean();

    if (!coreBusinesses) {
      res.status(404).json({
        success: false,
        message: "Core business not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Core business fetched sucessfully",
      data: coreBusinesses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch core business items",
      error: error.message,
    });
  }
};

const getNavbarItems = async (req, res) => {
  try {
    let coreBusiness;
    const cached = cache.get("navbarCoreBusinessss");

    if (cached) {
      coreBusiness = cached;
    } else {
      coreBusiness = await CoreBusiness.find()
        .select(
          "hasSubDomain displayCoreBusiness displayProjects name href learnMore"
        )
        .sort({ index: 1 })
        .lean();

      cache.set("navbarCoreBusiness", coreBusiness);
    }

    res.status(200).json({
      success: true,
      message: "Core business for navbar fetched successfully",
      data: coreBusiness,
    });
  } catch (error) {
    
    res.status(500).json({
      success: false,
      message: "Internal server error",error:error.message
    });
  }
};

module.exports = {
  addCoreBusiness,
  editCoreBusiness,
  deleteCoreBusiness,
  getAllCoreBusinesses,
  getCoreBusinessesByName,
  getCoreBusinessesById,
  getNavbarItems,
};
