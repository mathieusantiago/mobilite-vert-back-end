const CategorieModel = require("../models/categorie.model");
const ObjectID = require("mongoose").Types.ObjectId;

//Controller for get list of all Category
module.exports.readCategorie = (req, res) => {
  CategorieModel.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("❌ errors to get catégorie");
    }
  }).sort({updatedAt: 'desc'});
};

//Controller for get Category by id
module.exports.getAllCategoryById = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(404).send("ID unknow : " + req.params.id);
  }
  CategorieModel.findById(req.params.id, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("ID unknow : " + err);
    }
  }).select("-password");
};

//Controller for create new Category
module.exports.createCategorie = async (req, res) => {

  const newCategorie = new CategorieModel({
    categorie_name: req.body.categorie_name,
    creating_id: req.body.creating_id,
    categorie_type: req.body.categorie_type,
    description: req.body.description,
    state: req.body.state,
    order: req.body.order,
  });
  try {
    const article = await newCategorie.save();
    console.log("📄 categorie created");
    return res.status(201).json(article);
  } catch (err) {
    console.log("❌ 📄 errors for the created catégorie");

    return res.status(400).send(err);
  }
};

//Controller for update selected Category
module.exports.updateCategorie = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send(err);
  }
  const updatedRecord = {
    categorie_name: req.body.categorie_name,
    creating_id: req.body.creating_id,
    categorie_type: req.body.categorie_type,
    description: req.body.description,
    state: req.body.state,
  };
  CategorieModel.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    { new: true },
    (err, docs) => {
      if (!err) {
        console.log("📩 update catégorie");
        return res.send(docs);
      } else {
        console.log("❌ 📄 update catégorie errors");
      }
    }
  );
};

//Controller for update selected Category
module.exports.updateOrder = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send(err);
  }
  const updatedRecord = {
    order: req.body.order,
  };
  CategorieModel.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    { new: true },
    (err, docs) => {
      if (!err) {
        console.log("📩 update order");
        return res.send(docs);
      } else {
        console.log("❌ 📄 update order errors");
      }
    }
  );
};

//Controller for delete selected article
module.exports.deleteCategorie = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("ID unknown : " + req.params.id);
  }
  CategorieModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) {
      console.log("❌ catégorie deleted");
      res.send(docs);
    } else {
      console.log("❌ Delete catégorie error : " + err);
    }
  });
};
