const router = require("express").Router();
const articleContreoller = require("../Controllers/article.controller");

//Article if router is /article
router.get("/", articleContreoller.readArticle);
router.get("/:id", articleContreoller.getArticleById);
router.post("/", articleContreoller.createArticle);
router.put("/:id", articleContreoller.updateArticle);
router.delete("/:id", articleContreoller.deleteArticle);

module.exports = router;
