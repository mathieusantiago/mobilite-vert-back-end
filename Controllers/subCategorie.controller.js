const CategorieModel = require("../models/categorie.model");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.create_sub_categorie = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  console.log(req.body);
  try {
    return CategorieModel.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          categorie_type: {
            name_type: req.body.name_type,
            status: req.body.status,
            description: req.body.description,
            timestamp: new Date().getTime(),
          },
        },
      },
      { new: true },
      (err, docs) => {
        if (!err) return res.send(docs);
        else return res.status(400).send(err);
      }
    );
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports.updateSubCategorie = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    return CategorieModel.findById(req.params.id, (err, docs) => {
      const subCategorie = docs.categorie_type.find((subCat) =>
        subCat._id.equals(req.params.idSub)
      );
      console.log(subCategorie);
      if (!subCategorie) return res.status(404).send("Comment not found");
      subCategorie.name_type = req.body.name_type;
      subCategorie.status = req.body.status;
      subCategorie.description = req.body.description;

      return docs.save((err) => {
        if (!err) return res.status(200).send(docs);
        return res.status(500).send(err);
      });
    });
  } catch (err) {
    return res.status(400).send(err);
  }
};

//Controller for delete selected sub-categorie
module.exports.deleteSubCategorie = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("ID unknown : " + req.params.id);
  }
  try {
    return CategorieModel.findByIdAndUpdate(
      req.params.id,
      {
        $pull: {
          categorie_type: {
            _id: req.params.idSub,
          },
        },
      },
      { new: true },
      (err, docs) => {
        if (!err) {
          return res.send(docs);
        } else {
          return res.status(400).send(err);
        }
      }
    );
  } catch (err) {
    return res.status(400).send(err);
  }
};
