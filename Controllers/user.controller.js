//import the user model
const UserModel = require("../models/user.model");

//import the object id from mongoose
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find()
    .sort({ updatedAt: "desc" })
    .select("-password"); 
  res.status(200).json(users);
};


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

module.exports.deleteUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("ID unknown : " + req.params.id);
  }
  try {
    await UserModel.remove({ _id: req.params.id }).exec();
    return res.status(200).json({ message: "Successfully deleted" });
  } catch (err) {
    return res.status(401).json({ message: err });
  }
};
