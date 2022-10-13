const router = require("express").Router();
const galleryContreoller = require("../Controllers/gallery.controller");

//Article if router is /article
router.post("/", galleryContreoller.addGalleryPicture);
router.get("/", galleryContreoller.getAllPicture);
router.get("/count", galleryContreoller.galleryCount);
router.delete("/:id", galleryContreoller.deletePicture);

module.exports = router;
