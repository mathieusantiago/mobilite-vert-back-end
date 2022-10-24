const router = require("express").Router();
const gAnaliticsController = require("../Controllers/gAnalytics.controller");

//Article if router is /article
router.get("/", gAnaliticsController.getAnaytics);
router.get("/rows", gAnaliticsController.getRowAnaytics);


module.exports = router;
