const router = require("express").Router();
const fieldModel = require("../Controllers/fieldModel.controller");

//Article if router is /article
router.get("/", fieldModel.getAllFieldModel);
router.get("/:id", fieldModel.getFieldModelById);
router.post("/", fieldModel.createFieldModel);
router.delete("/:id", fieldModel.deleteFieldModel);
router.put("/:id", fieldModel.updateFieldModel);

module.exports = router;
