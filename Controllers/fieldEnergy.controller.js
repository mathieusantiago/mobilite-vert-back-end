//import model user in the controller
const fieldEnergy = require("../models/fieldEnergy.model");
//import dependencies jsonwebtoken
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.getAllFieldEnergy = async (req, res) => {
  const dataFieldEnergy = await fieldEnergy.find().sort({ updatedAt: "desc" });
  res.status(200).json(dataFieldEnergy);
};

module.exports.getFieldEnergyById = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(404).send("ID unknow : " + req.params.id);
  }
  fieldEnergy.findById(req.params.id, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("ID unknow : " + err);
    }
  })
};

//Controller for create new article
module.exports.createFieldEnergy = async (req, res) => {
  const newFieldEnergy = new fieldEnergy({
    filed_name: req.body.filed_name, //
    content_field: req.body.content_field, //
    chapo_field: req.body.chapo_field, //
  });
  try {
    const field = await newFieldEnergy.save();
    console.log("📄 content field created");
    return res.status(201).json(field);
  } catch (err) {
    console.log("❌ 📄 errors for the created field energy");

    return res.status(400).send(err);
  }
};

//Controller for update selected role
module.exports.updateFieldEnergy = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send(err);
  }
  const updatedRecord = {
    filed_name: req.body.filed_name, 
    content_field: req.body.content_field, 
    chapo_field: req.body.chapo_field, 
  };
  fieldEnergy.findByIdAndUpdate(
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
module.exports.deleteFieldEnergy = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("ID unknown : " + req.params.id);
  }

  fieldEnergy.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) {
      console.log("❌ role fieldEnergy");
      res.send(docs);
    } else {
      console.log("❌ Delete fieldEnergy error : " + err);
    }
  });
};
