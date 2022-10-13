const router = require("express").Router();
const articleContreoller = require("../Controllers/article.controller");

//Article if router is /article
router.get("/", articleContreoller.readArticle);
router.get("/count", articleContreoller.articleCount);
router.get("/publishCount", articleContreoller.articlePublishCount);
router.get("/:id", articleContreoller.getArticleById);
router.post("/", articleContreoller.createArticle);
router.put("/:id", articleContreoller.updateArticle);
router.delete("/:id", articleContreoller.deleteArticle);

module.exports = router;
