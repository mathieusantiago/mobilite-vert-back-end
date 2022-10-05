const GalleryModel = require("../models/gallery.model");
const ObjectID = require("mongoose").Types.ObjectId;


/**
 * @api {post} /api/gallery/  Added new picture gallery
 * @apiName addGalleryPicture
 * @apiGroup Gallery
 * @apiDescription methode API for added a new pictures in gallery
 * @apiBody {String} urlPicture=https://res.cloudinary.com/montpelliler/image/upload/v1659469033/kk2jcc5xz0ne6w3rrosh.png  urlPicture of role.
 * @apiBody {String} nom='Peugeot e208' nom of gallery.
 * @apiBody {String} seo='Photo de la Peugeot e208 de face' seo of gallery.
 * @apiBody {String} description='Peugeot e208 de face'  description of gallery.
 * @apiBody {Boolean} status=true status of gallery.
 * @apiSuccess {Object} gallery Object with gallery added.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 * {
 *   "_id": ObjectId('62e97cea50c2d1bcb4836e4b'),
 *   "urlPicture": 'https://res.cloudinary.com/montpelliler/image/upload/v1659469033/kk2jcc5xz0ne6w3rrosh.png',
 *   "nom": 'Peugeot e208',
 *   "seo": 'Photo de la Peugeot e208 de face',
 *   "description": 'Peugeot e208 de face',
 *   "createdAt": ISODate('2022-08-02T19:37:14.091Z'),
 *   "updatedAt": ISODate('2022-08-02T19:37:14.091Z'),
 *   "__v": 0
 * }
 * @apiSampleRequest http://127.0.0.1:5000/api/gallery
 */
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



/**
 * @api {get} /api/gallery/  Get all picture in gallery
 * @apiName getAllPicture
 * @apiGroup Gallery
 * @apiDescription methode API for get all pictures in gallery
 * 
 * @apiSuccess {Object} gallery Object with Gallery added.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 * {
 *   "_id": ObjectId('62e97cea50c2d1bcb4836e4b'),
 *   "urlPicture": 'https://res.cloudinary.com/montpelliler/image/upload/v1659469033/kk2jcc5xz0ne6w3rrosh.png',
 *   "nom": 'Peugeot e208',
 *   "seo": 'Photo de la Peugeot e208 de face',
 *   "description": 'Peugeot e208 de face',
 *   "createdAt": ISODate('2022-08-02T19:37:14.091Z'),
 *   "updatedAt": ISODate('2022-08-02T19:37:14.091Z'),
 *   "__v": 0
 * }
 * {
 *   "_id": ObjectId('62e97d2a50c2d1bcb4836e51'),
 *   "urlPicture": 'https://res.cloudinary.com/montpelliler/image/upload/v1659469097/d6yrngpgbug41vk5ud5m.png',
 *   "nom": 'Peugeot e208',
 *   "seo": 'PhotoLogo E-208 de la Peugeot e-208',
 *   "description": 'Logo E-208 de la Peugeot e-208',
 *   "createdAt": ISODate('2022-08-02T19:38:18.001Z'),
 *   "updatedAt": ISODate('2022-08-02T19:38:18.001Z'),
 *   "__v": 0
 * }
 * @apiSampleRequest http://127.0.0.1:5000/api/gallery
 */
module.exports.getAllPicture = async (req, res) => {
  const picture = await GalleryModel.find().sort({ updatedAt: "desc" });
  res.status(200).json(picture);
};



/**
 * @api {delete} /api/gallery/:id  Delete picture in gallery
 * @apiName deletePicture
 * @apiGroup Gallery
 * @apiDescription methode API for added new pictures in gallery
 * @apiParam {ObjectId} id gallery unique ObjectId.
 * @apiSuccess {Object} gallery Object with role deleted.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 * {
 *   "_id": ObjectId('62e97d2a50c2d1bcb4836e51'),
 *   "urlPicture": 'https://res.cloudinary.com/montpelliler/image/upload/v1659469097/d6yrngpgbug41vk5ud5m.png',
 *   "nom": 'Peugeot e208',
 *   "seo": 'PhotoLogo E-208 de la Peugeot e-208',
 *   "description": 'Logo E-208 de la Peugeot e-208',
 *   "createdAt": ISODate('2022-08-02T19:38:18.001Z'),
 *   "updatedAt": ISODate('2022-08-02T19:38:18.001Z'),
 *   "__v": 0
 * }
 * @apiSampleRequest http://127.0.0.1:5000/api/gallery/:id
 */
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
