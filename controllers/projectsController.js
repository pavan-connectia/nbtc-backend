const Projects = require("../models/projectsModel");

const createProjectsController = async (req, res) => {
  try {
    const projects = new Projects(req.body);
    const savedProjects = await projects.save();
    res.status(201).json({
      success: true,
      message: "Projects created successfully",
      data: savedProjects,
    });
  } catch (error) {
    
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const insertManyProjects = async (req, res) => {
  try {
    const savedProjects = await Projects.insertMany(req.body); // req.body should be an array
    res.status(201).json({
      success: true,
      message: "Projects created successfully",
      data: savedProjects,
    });
  } catch (error) {
    
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

const getAllProjectsController = async (req, res) => {
  try {
    const { display } = req.query;

    const filter = display ? { display: display === "true" } : {};

    const projectss = await Projects.find(filter)
      .populate("department", "href name")
      .sort({ index: 1 });
    res.status(200).json({
      success: true,
      message: "Projects fetched successfully",
      data: projectss,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getProjectsByIdController = async (req, res) => {
  try {
    const projects = await Projects.findById(req.params.id);
    if (!projects) {
      return res
        .status(404)
        .json({ success: false, message: "Projects not found" });
    }

    res.status(200).json({
      success: true,
      message: "Projects fetched successfully",
      data: projects,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getProjectsByDepartment = async (req, res) => {
  const { name } = req.params;
  const { display } = req.query;

  const filter = display ? { display: display === "true" } : {};

  try {
    const projects = await Projects.find(filter)
      .populate({
        path: "department",
        match: { href: name },
        select: "title href",
      })
      .exec();

    const filteredProjects = projects.filter(
      (project) => project.department !== null
    );

    if (filteredProjects.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No projects found for this title" });
    }

    res.status(200).json({
      success: true,
      message: "Projects fetched successfully",
      data: filteredProjects,
    });
  } catch (error) {
    
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getProjectsByDepartmentId = async (req, res) => {
  const { display } = req.query;
  const filter = { department: req.params.id };
  if (display) {
    filter.display = display === "true";
  }
  try {
    const projects = await Projects.find(filter)
      .populate("department", "href")
      .sort({ index: 1 });
    if (!projects.length) {
      return res
        .status(404)
        .json({ success: false, message: "Projects not found" });
    }
    res.status(200).json({
      success: true,
      message: "Projects fetched successfully",
      data: projects,
    });
  } catch (error) {
    
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateProjectsController = async (req, res) => {
  try {
    const updatedProjects = await Projects.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedProjects) {
      return res
        .status(404)
        .json({ success: false, message: "Projects not found" });
    }
    res.status(200).json({
      success: true,
      message: "Projects updated successfully",
      data: updatedProjects,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const deleteProjectsController = async (req, res) => {
  try {
    const deletedProjects = await Projects.findByIdAndDelete(req.params.id);
    if (!deletedProjects) {
      return res
        .status(404)
        .json({ success: false, message: "Projects not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Projects deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  createProjectsController,
  insertManyProjects,
  getAllProjectsController,
  getProjectsByIdController,
  getProjectsByDepartment,
  getProjectsByDepartmentId,
  updateProjectsController,
  deleteProjectsController,
};
