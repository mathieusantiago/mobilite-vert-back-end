//import the user model
const UserModel = require("../models/user.model");

//import the object id from mongoose
const ObjectID = require("mongoose").Types.ObjectId;

/**
 * methode API for get all users
 * @param {Object} req
 * @param {Object} res
 * @returns Object with all info of user
 */
module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find()
    .sort({ updatedAt: "desc" })
    .select("-password");
  res.status(200).json(users);
};

/**
 * methode API for get info only one users
 * @param {Object} req
 * @param {Object} res
 * @returns status 404 if req.params.id is undefined else info only one users
 */
module.exports.userInfo = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(404).send("ID unknow : " + req.params.id);
  }
  UserModel.findById(req.params.id, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("ID unknow : " + err);
    }
  }).select("-password");
};

/**
 * methode API for update info of user by Id
 * @param {Object} req
 * @param {Object} res
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
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    )
      .then((docs) => res.send(docs))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

/**
 * methode API for delete users info by id
 * @param {*} req
 * @param {*} res
 * @returns status 404 if req.params.id is undefined else return status of deleted
 */
module.exports.deleteUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("ID unknown : " + req.params.id);
  }
  try {
    await UserModel.remove({ _id: req.params.id }).exec();
    return res.status(200).json({ message: "Successfully deleted. " });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
