//import the user model
const UserModel = require("../models/user.model");

//import the object id from mongoose
const ObjectID = require("mongoose").Types.ObjectId;

/**
 * @api {get} /api/user/  Get All Users
 * @apiName GetUser
 * @apiGroup User
 * @apiDescription methode API for get all info of users
 * @apiSuccess {Object} users Object with all info of user.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *      {
 *       "_id": "62aadd63ebc163f0d6e9c69e",
 *       "pseudo": "mathieu",
 *       "email": "mathieu@gmail.com",
 *       "createdAt": "2022-06-16T07:36:03.583Z",
 *       "updatedAt": "2022-06-16T07:36:03.583Z",
 *       "__v": 0
 *      },
 *      {
 *       "_id": "62aadd63ebc163f0d6e9c98t",
 *       "pseudo": "Estelle",
 *       "email": "Estelle@gmail.com",
 *       "createdAt": "2022-06-16T07:36:03.583Z",
 *       "updatedAt": "2022-06-16T07:36:03.583Z",
 *       "__v": 0
 *      },
 * @apiSampleRequest http://127.0.0.1:5000/api/user
 */

module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find()
    .sort({ updatedAt: "desc" })
    .select("-password");
  res.status(200).json(users);
};

/**
 *
 * @api {get} /api/user/:id  Get One User By Id
 * @apiName GetUserById
 * @apiGroup User
 * @apiDescription methode API for get info by id only one users
 * @apiParam {ObjectId} id Users unique ObjectId.
 * @apiSuccess {Object} docs Object with info of user.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *      {
 *       "_id": "62aadd63ebc163f0d6e9c69e",
 *       "pseudo": "mathieu",
 *       "email": "mathieu@gmail.com",
 *       "createdAt": "2022-06-16T07:36:03.583Z",
 *       "updatedAt": "2022-06-16T07:36:03.583Z",
 *       "__v": 0
 *      }
 *  @apiError IdUserNotFound The <code>id</code> of the User was not found.
 *  @apiErrorExample {json} Error-Response:
 *   HTTP/1.1 401
 *   {
 *     "error": "IdUserNotFound"
 *   }
 * @apiSampleRequest http://127.0.0.1:5000/api/user/:id
 */
module.exports.userInfo = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(404).send("ID unknow : " + req.params.id);
  }
  UserModel.findById(req.params.id, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ message: err });
      console.log("ID unknow : " + err);
    }
  }).select("-password");
};

/**
 * methode API for update info of user by Id
 * @param {Object} req
 * @param {Object} res
 */

/**
 *
 * @api {put} /api/user/:id  Put User By Id
 * @apiName PutUserById
 * @apiGroup User
 * @apiDescription methode API for update info of user by Id
 * @apiParam {ObjectId} id Users unique ObjectId.
 * @apiBody {String} pseudo Pseudo of users.
 * @apiBody {String} email Email unique of Users.
 * @apiSuccess {Object} docs Object with info of user updated.
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *      {
 *       "_id": "62aadd63ebc163f0d6e9c69e",
 *       "pseudo": "mathieu",
 *       "email": "mathieu@gmail.com",
 *       "createdAt": "2022-06-16T07:36:03.583Z",
 *       "updatedAt": "2022-06-16T07:36:03.583Z",
 *       "__v": 0
 *      }
 *  @apiError ParamUserNotFound The <code>id,pseudo,email</code> of the User was not found.
 *  @apiErrorExample {json} Error-Response:
 *   HTTP/1.1 401
 *   {
 *     "error": "IdUserNotFound",
 *     "error": "LoginUserNotFound",
 *     "error": "EmailUserNotFound",
 *   }
 * @apiSampleRequest http://127.0.0.1:5000/api/user/:id
 */
module.exports.updateUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("ID invalid : " + req.params.id);
  }
  try {
    await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          pseudo: req.body.pseudo,
          email: req.body.email,
          role: req.body.role,
          status: req.body.status,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    )
      .then((docs) => res.send(docs))
      .catch((err) => res.status(401).send({ message: err }));
  } catch (err) {
    res.status(401).json({ message: err });
  }
};

/**
 * methode API for delete users info by id
 * @param {*} req
 * @param {*} res
 * @returns status 404 if req.params.id is undefined else return status of deleted
 */

/**
 *
 * @api {delete} /api/user/:id  Delete User By Id
 * @apiName DeleteUserById
 * @apiGroup User
 * @apiDescription methode API for delete users info by id
 * @apiParam {ObjectId} id Users unique ObjectId.
 * @apiSuccess {Object} docs Object with info of user deleted.
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *      {
 *       "_id": "62aadd63ebc163f0d6e9c69e",
 *       "pseudo": "mathieu",
 *       "email": "mathieu@gmail.com",
 *       "createdAt": "2022-06-16T07:36:03.583Z",
 *       "updatedAt": "2022-06-16T07:36:03.583Z",
 *       "__v": 0
 *      }
 *  @apiError IdUserNotFound The <code>id</code> of the User was not found.
 *  @apiErrorExample {json} Error-Response:
 *   HTTP/1.1 401
 *   {
 *     "error": "IdUserNotFound",
 *   }
 * @apiSampleRequest http://127.0.0.1:5000/api/user/:id
 */
module.exports.deleteUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("ID unknown : " + req.params.id);
  }
  try {
    await UserModel.remove({ _id: req.params.id }).exec();
    return res.status(200).json({ message: "Successfully deleted. " });
  } catch (err) {
    return res.status(401).json({ message: err });
  }
};
