//import the user model
const UserModel = require("../models/user.model");

//import the object id from mongoose
const ObjectID = require("mongoose").Types.ObjectId;

/**
 * @api {get} /api/user/  Get All Users
 * @apiName getAllUsers
 * @apiGroup User
 * @apiDescription methode API for get all info of users
 * @apiSuccess {Object} users Object with all info of user.
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *      {
 *          "_id": ObjectId('63060fe60a9cbcf6f9baeeff'),
 *          "pseudo": 'Santiago',
 *          "email": 'mathieu@gmail.com',
 *          "password": '$2b$10$qpuz1bfjs7Oo.1UT5FRcZ./elWvm0etv0y3tNm2VkWnJrHpGTZ/zK',
 *          "role": '62e97b5950c2d1bcb4836dc2',
 *          "status": true,
 *          "createdAt": ISODate('2022-08-24T11:47:50.823Z'),
 *          "updatedAt": ISODate('2022-08-24T11:47:50.823Z'),
 *          "__v": 0
 *      }
 *      {
 *          "_id": ObjectId('63061154bf8faa92174fd0e7'),
 *          "pseudo": 'Le Corre',
 *          "email": 'estelle@gmail.com',
 *          "password": '$2b$10$Ayc0zdrfkNzEWtWAOWuk0.q482pmJKToM/5xOEryOwj47Smrs8sHO',
 *          "role": '62e97c7350c2d1bcb4836e11',
 *          "status": true,
 *          "createdAt": ISODate('2022-08-24T11:53:56.751Z'),
 *          "updatedAt": ISODate('2022-08-24T11:53:56.751Z'),
 *          "__v": 0
 *      }
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
 * @apiName userInfo
 * @apiGroup User
 * @apiDescription methode API for get info by id only one users
 * @apiParam {ObjectId} id Users unique ObjectId.
 * @apiSuccess {Object} User Object with info of user.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *      {
 *          "_id": ObjectId('63060fe60a9cbcf6f9baeeff'),
 *          "pseudo": 'Santiago',
 *          "email": 'mathieu@gmail.com',
 *          "role": '62e97b5950c2d1bcb4836dc2',
 *          "status": true,
 *          "createdAt": ISODate('2022-08-24T11:47:50.823Z'),
 *          "updatedAt": ISODate('2022-08-24T11:47:50.823Z'),
 *          "__v": 0
 *      }
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
 *
 * @api {put} /api/user/:id  Update User By Id
 * @apiName PutUserById
 * @apiGroup User
 * @apiDescription methode API for update info of user by Id
 * @apiParam {ObjectId} id Users unique ObjectId.
 * @apiBody {String} pseudo=mathieu  Pseudo of users.
 * @apiBody {String} email=mathieu@gmail.com Email of users.
 * @apiBody {String} password=mathieu unique password of Users.
 * @apiBody {String} role=62e97b5950c2d1bcb4836dc2 Role id of Users.
 * @apiSuccess {Object} docs Object with info of user updated.
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *      {
 *          "_id": ObjectId('63060fe60a9cbcf6f9baeeff'),
 *          "pseudo": 'Santiago',
 *          "email": 'mathieu@gmail.com',
 *          "role": '62e97b5950c2d1bcb4836dc2',
 *          "status": true,
 *          "createdAt": ISODate('2022-08-24T11:47:50.823Z'),
 *          "updatedAt": ISODate('2022-08-24T11:47:50.823Z'),
 *          "__v": 0
 *      }
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
 *
 * @api {delete} /api/user/:id  Delete User By Id
 * @apiName DeleteUserById
 * @apiGroup User
 * @apiDescription methode API for delete users info by id
 * @apiParam {ObjectId} id Users unique ObjectId.
 * @apiSuccess {Object} User Object with info of user deleted.
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *      {
 *          "_id": ObjectId('63060fe60a9cbcf6f9baeeff'),
 *          "pseudo": 'Santiago',
 *          "email": 'mathieu@gmail.com',
 *          "role": '62e97b5950c2d1bcb4836dc2',
 *          "status": true,
 *          "createdAt": ISODate('2022-08-24T11:47:50.823Z'),
 *          "updatedAt": ISODate('2022-08-24T11:47:50.823Z'),
 *          "__v": 0
 *      }
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
