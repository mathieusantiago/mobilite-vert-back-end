const router = require("express").Router();
const authController = require("../Controllers/auth.controller")
const userController = require("../Controllers/user.controller")

//Auth if router is /register eles execut function SignUp in to authController
router.post ("/register", authController.signUp)
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

//user data base 
router.get ("/", userController.getAllUsers)
router.get("/:id", userController.userInfo);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;