//import model user in the controller
const UserModel = require("../models/user.model");
//import dependencies jsonwebtoken
const jwt = require("jsonwebtoken");
//import utils for catch errors
const { signInErrors, signUpErrors } = require("../utils/errors.utils");
//constance limit the date expired token (3 day)
const maxAge = 3 * 24 * 60 * 60 * 1000;
// constance generate key encode for crypt JWToken
const createToken = (id) => {
  console.log("🔑 token created");
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};


/**
 * @api {post} /api/user/login  Register new user 
 * @apiName signUp
 * @apiGroup Autantification
 * @apiDescription methode API for Register a new user
 * @apiSuccess {Object} Object with user id.
 * @apiBody {String} pseudo=mathieu  Pseudo of users.
 * @apiBody {String} email=mathieu@gmail.com  Email of users.
 * @apiBody {String} password=mathieu  Password unique of Users.
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *   {
 *       "user": "63060fe60a9cbcf6f9baeeff"
 *   }
 * @apiSampleRequest http://127.0.0.1:5000/api/user/login
 */
module.exports.signUp = async (req, res) => {
  const { pseudo, email, password, role, status } = req.body;

  try {
    const user = await UserModel.create({ pseudo, email, password, role, status });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = signUpErrors(err);
    res.status(400).send({ errors });
  }
};

/**
 * @api {post} /api/user/login  Login user 
 * @apiName signIn
 * @apiGroup Autantification
 * @apiDescription methode API for login  user
 * @apiSuccess {Object} Object with user id.
 * @apiBody {String} email=mathieu@gmail.com email Email of users.
 * @apiBody {String} password=mathieu password Password unique of Users.
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *   {
 *       "user": "63060fe60a9cbcf6f9baeeff"
 *   }
 * @apiSampleRequest http://127.0.0.1:5000/api/user/login
 */
module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, {domain: "node-script.onrender.com", sameSite: "none", http0nly: false, maxAge : maxAge, secure: true});
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = signInErrors(err);
    res.status(400).json({ errors });
  }
};

/**
 * @api {get} /api/user/login  Logout user 
 * @apiName signIn
 * @apiGroup Autantification
 * @apiDescription methode API for logout user (delete the cookies)
 * @apiSampleRequest http://127.0.0.1:5000/api/user/login
 */
module.exports.logout = (req, res) => {
  console.log('❌ user logout')
  res.cookie("jwt", "", { maxAge: 1 });
  res.send('user logout')
};
