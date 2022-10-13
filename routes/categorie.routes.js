const router = require("express").Router();
const categorieContreoller = require("../Controllers/categorie.controller");

//Article if router is /article
router.get("/", categorieContreoller.readCategorie);
router.get("/count", categorieContreoller.categorieCount);
router.get("/:id", categorieContreoller.getCategoryById);
router.post("/", categorieContreoller.createCategorie);
router.put("/:id", categorieContreoller.updateCategorie);
router.put("/updateOrder/:id", categorieContreoller.updateOrder);
router.delete("/:id", categorieContreoller.deleteCategorie);

module.exports = router;
