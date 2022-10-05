const router = require("express").Router();
const tagsController = require("../Controllers/tagsController.controller.js");

//Article if router is /article
router.get("/", tagsController.getAllDataTags);
router.get("/:id", tagsController.getDataTagsById);
router.post("/", tagsController.createDataTags);
router.put("/:id", tagsController.upDatedataTags);
router.delete("/:id", tagsController.deleteDataTags);

module.exports = router;