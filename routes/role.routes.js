const router = require("express").Router();
const roleContreoller = require("../Controllers/role.controller");

//Role if router is /role
router.get("/", roleContreoller.readRole);
router.post("/", roleContreoller.createRole);
router.delete("/:id", roleContreoller.deleteRole);
router.put("/:id", roleContreoller.updateRole);

module.exports = router;
