const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");

//check if user have the cookie whit jsonwebtoken
module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        res.cookie("jwt", "", { maxAge: 1 });
        next();
      } else {
        // console.log("✅ decodedToken");
        let user = await UserModel.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports.requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err) => {
      if (err) {
        res.send(400).json("❌ err token ");
      } else {
        next();
      }
    });
  } else {
    console.log("❌ No token");
    res.sendStatus(400);
    // res.send("❌ No token")
  }
};
