const Service = require("../models/servicesModel");

const createServiceController = async (req, res) => {
  try {
    const service = new Service(req.body);
    const savedService = await service.save();
    res.status(201).json({
      success: true,
      message: "Service inserted successfully",
      data: savedService,
    });
  } catch (error) {
    
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const getAllServiceController = async (req, res) => {
  try {
    const service = await Service.find().populate("department", "name");
    res.status(200).json({
      success: true,
      message: "Service fetched successfully",
      data: service,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const getServiceByIdController = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res
        .status(404)
        .json({ success: false, message: "Service not found" });
    }
    res.status(200).json({
      success: true,
      message: "Service fetched successfully",
      data: service,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const getServiceByDepartmentId = async (req, res) => {
  try {
    const service = await Service.find({ department: req.params.id });
    if (!service) {
      return res
        .status(404)
        .json({ success: false, message: "Service not found" });
    }
    res.status(200).json({
      success: true,
      message: "Service fetched successfully",
      data: service,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const updateServiceController = async (req, res) => {
  try {
    const { id } = req.params;
    const { ...updateData } = req.body;

    const updatedService = await Service.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      message: "Service updated successfully",
      data: updatedService,
    });
  } catch (error) {
    console.error("Error in Update Service: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const deleteServiceController = async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    if (!deletedService) {
      return res
        .status(404)
        .json({ success: false, message: "Service not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

module.exports = {
  createServiceController,
  getAllServiceController,
  getServiceByIdController,
  getServiceByDepartmentId,
  updateServiceController,
  deleteServiceController,
};
