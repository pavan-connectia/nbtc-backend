const express = require("express");
const router = express.Router();
const {
  protect,
  authorize,
  checkDepartmentAccess,
} = require("../middleware/auth");
const {
  createCsrController,
  getAllCsrController,
  getCsrByIdController,
  updateCsrController,
  deleteCsrController,
} = require("../controllers/news/csrControllers");
const {
  createImgGalleryController,
  insertManyImgGalleryController,
  getAllImgGalleryController,
  getImgGalleryByIdController,
  updateImgGalleryController,
  deleteImgGalleryController,
  getImgGalleryByDepartment,
} = require("../controllers/news/imgGalleryControllers");
const {
  createNewsController,
  getAllNewsController,
  getNewsByIdController,
  updateNewsController,
  deleteNewsController,
  getNewsByDepartment,
} = require("../controllers/news/newsControllers");
const {
  createPublicationController,
  getAllPublicationController,
  getPublicationByIdController,
  updatePublicationController,
  deletePublicationController,
  getPublicationByDepartment,
} = require("../controllers/news/publicationController");
const {
  createVideoGalleryController,
  getAllVideoGalleryController,
  getVideoGalleryByIdController,
  updateVideoGalleryController,
  deleteVideoGalleryController,
  getVideoGalleryByDepartmentController,
} = require("../controllers/news/videoGalleryControllers");

const middleware = [protect, checkDepartmentAccess];
const superAdminMiddleware = [protect, authorize("superadmin")];

router.get("/csr", getAllCsrController);
router.post("/csr", superAdminMiddleware, createCsrController);
router.get("/csr/:id", superAdminMiddleware, getCsrByIdController);
router.patch("/csr/:id", superAdminMiddleware, updateCsrController);
router.delete("/csr/:id", superAdminMiddleware, deleteCsrController);

router.post(
  "/image-gallery/insert-many",
  insertManyImgGalleryController
);
router.post("/image-gallery", middleware, createImgGalleryController);
router.get("/image-gallery", getAllImgGalleryController);
router.get("/image-gallery/department/:id", getImgGalleryByDepartment);
router.get("/image-gallery/:id", protect, getImgGalleryByIdController);
router.patch("/image-gallery/:id", middleware, updateImgGalleryController);
router.delete("/image-gallery/:id", middleware, deleteImgGalleryController);

router.get("/news", getAllNewsController);
router.get("/news/:id", getNewsByIdController);
router.get("/news/department/:id", getNewsByDepartment);
router.post("/news", middleware, createNewsController);
router.patch("/news/:id", middleware, updateNewsController);
router.delete("/news/:id", middleware, deleteNewsController);

router.get("/publication", getAllPublicationController);
router.get("/publication/department/:id", getPublicationByDepartment);
router.post("/publication", middleware, createPublicationController);
router.get("/publication/:id", protect, getPublicationByIdController);
router.patch("/publication/:id", middleware, updatePublicationController);
router.delete("/publication/:id", middleware, deletePublicationController);

router.get("/video-gallery", getAllVideoGalleryController);
router.post("/video-gallery", middleware, createVideoGalleryController);
router.get("/video-gallery/:id", protect, getVideoGalleryByIdController);
router.get(
  "/video-gallery/department/:id",
  getVideoGalleryByDepartmentController
);
router.patch("/video-gallery/:id", middleware, updateVideoGalleryController);
router.delete("/video-gallery/:id", middleware, deleteVideoGalleryController);

module.exports = router;
