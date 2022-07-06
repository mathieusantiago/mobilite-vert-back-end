const router = require("express").Router();
const categorieContreoller = require("../Controllers/categorie.controller")

//Article if router is /article 
router.get('/', categorieContreoller.readCategorie)
router.get('/:id', categorieContreoller.getAllCategoryById)
router.post('/', categorieContreoller.createCategorie)
router.put('/:id', categorieContreoller.updateCategorie)
router.delete('/:id', categorieContreoller.deleteCategorie)

module.exports = router;