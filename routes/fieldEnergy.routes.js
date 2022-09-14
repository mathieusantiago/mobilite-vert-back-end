const router = require("express").Router();
const fieldEnergy = require("../Controllers/fieldEnergy.controller");

//Article if router is /article
router.get("/", fieldEnergy.getAllFieldEnergy);
router.get("/:id", fieldEnergy.getFieldEnergyById);
router.post("/", fieldEnergy.createFieldEnergy);
router.delete("/:id", fieldEnergy.deleteFieldEnergy);
router.put("/:id", fieldEnergy.updateFieldEnergy);

module.exports = router;
