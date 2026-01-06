"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/projectsController"),
  createProjectsController = _require.createProjectsController,
  getAllProjectsController = _require.getAllProjectsController,
  getProjectsByIdController = _require.getProjectsByIdController,
  updateProjectsController = _require.updateProjectsController,
  deleteProjectsController = _require.deleteProjectsController,
  getProjectsByDepartment = _require.getProjectsByDepartment,
  getProjectsByDepartmentId = _require.getProjectsByDepartmentId,
  insertManyProjects = _require.insertManyProjects;
var _require2 = require("../middleware/auth"),
  protect = _require2.protect,
  checkDepartmentAccess = _require2.checkDepartmentAccess;
router.get("/", getAllProjectsController);
router.get("/department/:id", getProjectsByDepartmentId);
router.get("/department-name/:name", getProjectsByDepartment);
router.get("/:id", getProjectsByIdController);
router.post("/many", protect, insertManyProjects);
router.post("/", protect, checkDepartmentAccess, createProjectsController);
router.patch("/:id", protect, checkDepartmentAccess, updateProjectsController);
router["delete"]("/:id", protect, checkDepartmentAccess, deleteProjectsController);
module.exports = router;