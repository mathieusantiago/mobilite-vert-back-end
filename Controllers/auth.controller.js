//import model user in the controller
const UserModel = require("../models/user.model");
//import dependencies jsonwebtoken
const jwt = require("jsonwebtoken");
//import utils for catch errors
const {signInErrors, signUpErrors} = require("../utils/errors.utils")
//constance limit the date expired token (3 day)
const maxAge = 3 * 24 * 60 * 60 * 1000;
// constance generate key encode for crypt JWToken
const createToken = (id) => {
  console.log("🔑 token created");
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

// Controller for the register user
module.exports.signUp = async (req, res) => {
  const { pseudo, email, password } = req.body;

  try {
    const user = await UserModel.create({ pseudo, email, password });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = signUpErrors(err)
    res.status(200).send({ errors });
  }
};

// Controller for the login user
module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = signInErrors(err);
    res.status(200).json({ errors });
  }
};

// Contreoller for the logout user
module.exports.logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
};
