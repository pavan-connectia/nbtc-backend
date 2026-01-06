"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../middleware/auth"),
  protect = _require.protect,
  authorize = _require.authorize,
  checkDepartmentAccess = _require.checkDepartmentAccess;
var _require2 = require("../controllers/news/csrControllers"),
  createCsrController = _require2.createCsrController,
  getAllCsrController = _require2.getAllCsrController,
  getCsrByIdController = _require2.getCsrByIdController,
  updateCsrController = _require2.updateCsrController,
  deleteCsrController = _require2.deleteCsrController;
var _require3 = require("../controllers/news/imgGalleryControllers"),
  createImgGalleryController = _require3.createImgGalleryController,
  insertManyImgGalleryController = _require3.insertManyImgGalleryController,
  getAllImgGalleryController = _require3.getAllImgGalleryController,
  getImgGalleryByIdController = _require3.getImgGalleryByIdController,
  updateImgGalleryController = _require3.updateImgGalleryController,
  deleteImgGalleryController = _require3.deleteImgGalleryController,
  getImgGalleryByDepartment = _require3.getImgGalleryByDepartment;
var _require4 = require("../controllers/news/newsControllers"),
  createNewsController = _require4.createNewsController,
  getAllNewsController = _require4.getAllNewsController,
  getNewsByIdController = _require4.getNewsByIdController,
  updateNewsController = _require4.updateNewsController,
  deleteNewsController = _require4.deleteNewsController,
  getNewsByDepartment = _require4.getNewsByDepartment;
var _require5 = require("../controllers/news/publicationController"),
  createPublicationController = _require5.createPublicationController,
  getAllPublicationController = _require5.getAllPublicationController,
  getPublicationByIdController = _require5.getPublicationByIdController,
  updatePublicationController = _require5.updatePublicationController,
  deletePublicationController = _require5.deletePublicationController,
  getPublicationByDepartment = _require5.getPublicationByDepartment;
var _require6 = require("../controllers/news/videoGalleryControllers"),
  createVideoGalleryController = _require6.createVideoGalleryController,
  getAllVideoGalleryController = _require6.getAllVideoGalleryController,
  getVideoGalleryByIdController = _require6.getVideoGalleryByIdController,
  updateVideoGalleryController = _require6.updateVideoGalleryController,
  deleteVideoGalleryController = _require6.deleteVideoGalleryController,
  getVideoGalleryByDepartmentController = _require6.getVideoGalleryByDepartmentController;
var middleware = [protect, checkDepartmentAccess];
var superAdminMiddleware = [protect, authorize("superadmin")];
router.get("/csr", getAllCsrController);
router.post("/csr", superAdminMiddleware, createCsrController);
router.get("/csr/:id", superAdminMiddleware, getCsrByIdController);
router.patch("/csr/:id", superAdminMiddleware, updateCsrController);
router["delete"]("/csr/:id", superAdminMiddleware, deleteCsrController);
router.post("/image-gallery/insert-many", insertManyImgGalleryController);
router.post("/image-gallery", middleware, createImgGalleryController);
router.get("/image-gallery", getAllImgGalleryController);
router.get("/image-gallery/department/:id", getImgGalleryByDepartment);
router.get("/image-gallery/:id", protect, getImgGalleryByIdController);
router.patch("/image-gallery/:id", middleware, updateImgGalleryController);
router["delete"]("/image-gallery/:id", middleware, deleteImgGalleryController);
router.get("/news", getAllNewsController);
router.get("/news/:id", getNewsByIdController);
router.get("/news/department/:id", getNewsByDepartment);
router.post("/news", middleware, createNewsController);
router.patch("/news/:id", middleware, updateNewsController);
router["delete"]("/news/:id", middleware, deleteNewsController);
router.get("/publication", getAllPublicationController);
router.get("/publication/department/:id", getPublicationByDepartment);
router.post("/publication", middleware, createPublicationController);
router.get("/publication/:id", protect, getPublicationByIdController);
router.patch("/publication/:id", middleware, updatePublicationController);
router["delete"]("/publication/:id", middleware, deletePublicationController);
router.get("/video-gallery", getAllVideoGalleryController);
router.post("/video-gallery", middleware, createVideoGalleryController);
router.get("/video-gallery/:id", protect, getVideoGalleryByIdController);
router.get("/video-gallery/department/:id", getVideoGalleryByDepartmentController);
router.patch("/video-gallery/:id", middleware, updateVideoGalleryController);
router["delete"]("/video-gallery/:id", middleware, deleteVideoGalleryController);
module.exports = router;