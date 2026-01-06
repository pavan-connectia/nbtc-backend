const express = require("express");
const router = express.Router();
const {
  createProjectsController,
  getAllProjectsController,
  getProjectsByIdController,
  updateProjectsController,
  deleteProjectsController,
  getProjectsByDepartment,
  getProjectsByDepartmentId,
  insertManyProjects,
} = require("../controllers/projectsController");
const { protect, checkDepartmentAccess } = require("../middleware/auth");

router.get("/", getAllProjectsController);
router.get("/department/:id", getProjectsByDepartmentId);
router.get("/department-name/:name", getProjectsByDepartment);
router.get("/:id", getProjectsByIdController);
router.post("/many",protect,insertManyProjects);
router.post("/", protect, checkDepartmentAccess, createProjectsController);
router.patch("/:id", protect, checkDepartmentAccess, updateProjectsController);
router.delete("/:id", protect, checkDepartmentAccess, deleteProjectsController);

module.exports = router;
