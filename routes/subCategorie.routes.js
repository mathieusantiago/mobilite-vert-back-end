const router = require("express").Router();
const subCategorieContreoller = require("../Controllers/subCategorie.controller");

//Article if router is /article
router.patch("/sub/:id/:idSub", subCategorieContreoller.updateSubCategorie);
router.patch("/:id/:idSub", subCategorieContreoller.deleteSubCategorie);
router.patch("/:id", subCategorieContreoller.create_sub_categorie);

module.exports = router;
