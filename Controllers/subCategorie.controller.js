const CategorieModel = require("../models/categorie.model");
const ObjectID = require("mongoose").Types.ObjectId;

/**
 * @api {patch} /api/subcategorie/  Create new subcategorie
 * @apiName create_sub_categorie
 * @apiGroup Subcategorie
 * @apiDescription methode API for create new subcategorie
 * @apiBody {String} name_type=Voitures_hybrides  name_type of subcategorie.
 * @apiBody {String} description=\nVoitures_électriques description of subcategorie.
 * @apiBody {Boolean} status=true status of subcategorie.
 * @apiSuccess {Object} subcategorie Object with all new subcategorie created.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *      {
 *          "_id": ObjectId('62e9786950c2d1bcb4836c43')
 *          "name_type": 'Voitures hybrides',
 *          "status": true,
 *          "description": '\nVoitures électriques\nMobilité verte\nQuelle énergie pour quel usage ?\nLes avantages fiscaux',
 *      },
 * @apiSampleRequest http://127.0.0.1:5000/api/subcategorie
 */
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

/**
 * @api {patch} /api/subcategorie/:id  Update new subcategorie
 * @apiName updateSubCategorie
 * @apiGroup Subcategorie
 * @apiDescription methode API for update subcategorie
 * @apiParam {ObjectId} id subcategorie unique ObjectId.
 * @apiBody {String} name_type=Voitures_hybrides  name_type of subcategorie.
 * @apiBody {String} description='Voitures_lectriques description of subcategorie.
 * @apiBody {Boolean} status=true status of subcategorie.
 * @apiSuccess {Object} subcategorie Object with all subcategorie updated.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *      {
 *          "name_type": 'Voitures hybrides',
 *          "status": true,
 *          "description": '\nVoitures électriques\nMobilité verte\nQuelle énergie pour quel usage ?\nLes avantages fiscaux',
 *          "_id": ObjectId('62e9786950c2d1bcb4836c43')
 *      },
 * @apiSampleRequest http://127.0.0.1:5000/api/subcategorie/:id
 */
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

/**
 * @api {patch} /api/subcategorie/:id  Delete subcategorie
 * @apiName deleteSubCategorie
 * @apiGroup Subcategorie
 * @apiDescription methode API for delete subcategorie
 * @apiParam {ObjectId} id subcategorie unique ObjectId.
 * @apiSuccess {Object} subcategorie Object with all subcategorie deleted.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *      {
 *          "name_type": 'Voitures hybrides',
 *          "status": true,
 *          "description": '\nVoitures électriques\nMobilité verte\nQuelle énergie pour quel usage ?\nLes avantages fiscaux',
 *          "_id": ObjectId('62e9786950c2d1bcb4836c43')
 *      },
 * @apiSampleRequest http://127.0.0.1:5000/api/subcategorie/:id
 */
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
