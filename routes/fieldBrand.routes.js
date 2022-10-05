const router = require("express").Router();
const fieldBrand = require("../Controllers/fieldBrand.controller");

//Article if router is /article
router.get("/", fieldBrand.getAllFieldBrand);
router.get("/:id", fieldBrand.getFieldBrandById);
router.post("/", fieldBrand.createFieldBrand);
router.delete("/:id", fieldBrand.deleteFieldBrand);
router.put("/:id", fieldBrand.updateFieldBrand);

module.exports = router;
