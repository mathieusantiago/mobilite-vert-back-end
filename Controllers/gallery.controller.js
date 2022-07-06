const GalleryModel = require("../models/gallery.model");
const ObjectID = require("mongoose").Types.ObjectId;

//Controller for create new article
module.exports.addGalleryPicture = async (req, res) => {
  const newPicture = new GalleryModel({
    urlPicture: req.body.urlPicture,
    seo: req.body.seo,
    description: req.body.description,
    nom: req.body.nom,
  });
  try {
    const picture = await newPicture.save();
    console.log("📄 article created");
    return res.status(201).json(picture);
  } catch (err) {
    console.log("❌ 📄 errors for the picture added");

    return res.status(400).send(err);
  }
};

module.exports.getAllPicture = async (req, res) => {
  const picture = await GalleryModel.find().sort({updatedAt: 'desc'});
  res.status(200).json(picture);
};

//Controller for delete selected picture
module.exports.deletePicture = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("ID unknown : " + req.params.id);
  }

  GalleryModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) {
      console.log("❌ picture deleted");
      res.send(docs);
    } else {
      console.log("❌ Delete error : " + err);
    }
  });
};
