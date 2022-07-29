const RoleModel = require("../models/role.model");
const ObjectID = require("mongoose").Types.ObjectId;

//Controller for get list of all role
module.exports.readRole = (req, res) => {
  RoleModel.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("❌ errors to get article");
    }
  }).sort({ updatedAt: "desc" });
};

//Controller for create new role
module.exports.createRole = async (req, res) => {
  const newRole = new RoleModel({
    roleName: req.body.roleName,
    read: req.body.read,
    write: req.body.write,
    upDate: req.body.upDate,
    admin: req.body.admin,
    status: req.body.status,
  });
  try {
    const role = await newRole.save();
    console.log("📄 role created");
    return res.status(201).json(role);
  } catch (err) {
    console.log("❌ 📄 errors for the created role");

    return res.status(400).send(err);
  }
};

//Controller for update selected role
module.exports.updateRole = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send(err);
  }
  const updatedRecord = {
    read: req.body.read,
    write: req.body.write,
    upDate: req.body.upDate,
    admin: req.body.admin,
    status: req.body.status,
  };
  RoleModel.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    { new: true },
    (err, docs) => {
      if (!err) {
        console.log("📩 update role");
        return res.send(docs);
      } else {
        console.log("❌ 📄 update role errors");
      }
    }
  );
};

//Controller for delete selected role
module.exports.deleteRole = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("ID unknown : " + req.params.id);
  }

  RoleModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) {
      console.log("❌ role deleted");
      res.send(docs);
    } else {
      console.log("❌ Delete error : " + err);
    }
  });
};
