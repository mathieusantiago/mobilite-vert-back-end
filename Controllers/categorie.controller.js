const CategorieModel = require("../models/categorie.model");
const ObjectID = require("mongoose").Types.ObjectId;

/**
 * @api {get} /api/categorie/  Get all categorie
 * @apiName readCategorie
 * @apiGroup Categorie
 * @apiDescription methode API for get all categorie
 * @apiSuccess {Object} categorie Object with all categorie.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *    {
 *       "_id": "62e9797750c2d1bcb4836cd5",
 *       "categorie_name": "Actualité",
 *       "categorie_type": [],
 *       "state": true,
 *       "creating_id": "62e83c5dec3bd10095008e27",
 *       "description": "Tout l'actu sur l'automobile ",
 *       "order": 0,
 *       "createdAt": "2022-08-02T19:22:31.411Z",
 *       "updatedAt": "2022-08-02T19:29:45.697Z",
 *       "__v": 0
 *   },
 *   {
 *       "_id": "632a248bc1b5a0afaae76c73",
 *       "categorie_name": "test",
 *       "categorie_type": [],
 *       "state": true,
 *       "creating_id": "63060fe60a9cbcf6f9baeeff",
 *       "description": "test",
 *       "order": 0,
 *       "createdAt": "2022-09-20T20:37:31.587Z",
 *       "updatedAt": "2022-09-20T20:37:39.198Z",
 *       "__v": 0
 *   },
 *   {
 *       "_id": "62e978da50c2d1bcb4836c7e",
 *       "categorie_name": "Nos essais",
 *       "categorie_type": [],
 *       "state": true,
 *       "creating_id": "62e83c5dec3bd10095008e27",
 *       "description": "",
 *       "order": 1,
 *       "createdAt": "2022-08-02T19:19:54.970Z",
 *       "updatedAt": "2022-08-02T19:29:45.734Z",
 *       "__v": 0
 *   },
 *   {
 *       "_id": "62e9784150c2d1bcb4836c3d",
 *       "categorie_name": "Nouvelles énergies",
 *       "categorie_type": [],
 *       "state": true,
 *       "creating_id": "62e83c5dec3bd10095008e27",
 *       "description": "Rubrique sur le véhicule hybrid et éléctrique ",
 *       "order": 2,
 *       "createdAt": "2022-08-02T19:17:21.773Z",
 *       "updatedAt": "2022-08-02T19:29:45.740Z",
 *       "__v": 0
 *   }
 * @apiSampleRequest http://127.0.0.1:5000/api/categorie
 */
module.exports.readCategorie = (req, res) => {
  CategorieModel.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("❌ errors to get catégorie");
    }
  }).sort({ order: "asc" });
};

/**
 * @api {get} /api/categorie/:id  Get categorie by id
 * @apiName getCategoryById
 * @apiGroup Categorie
 * @apiDescription methode API for get all categorie
 * @apiSuccess {Object} categorie Object with all categorie.
 * @apiParam {ObjectId} id  id of categorie.
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *    {
 *       "_id": "62e9797750c2d1bcb4836cd5",
 *       "categorie_name": "Actualité",
 *       "categorie_type": [],
 *       "state": true,
 *       "creating_id": "62e83c5dec3bd10095008e27",
 *       "description": "Tout l'actu sur l'automobile ",
 *       "order": 0,
 *       "createdAt": "2022-08-02T19:22:31.411Z",
 *       "updatedAt": "2022-08-02T19:29:45.697Z",
 *       "__v": 0
 *   },
 * @apiSampleRequest http://127.0.0.1:5000/api/categorie/:id
 */
module.exports.getCategoryById = (req, res) => {
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

/**
 * @api {post} /api/categorie/  Create new categorie
 * @apiName createCategorie
 * @apiGroup Categorie
 * @apiDescription methode API for create new categorie
 * @apiBody {String} categorie_name=Actualité categorie_name of categorie.
 * @apiBody {String} categorie_type=[] categorie_type of categorie.
 * @apiBody {Boolean} state=true state of categorie.
 * @apiBody {String} creating_id="62e83c5dec3bd10095008e27" creating_id of categorie.
 * @apiBody {String} description="Tout l'actu sur l'automobile " description of categorie.
 * @apiBody {Number} order=0 order of categorie.
 * @apiSuccess {Object} categorie Object with all categorie.
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *    {
 *       "_id": "62e9797750c2d1bcb4836cd5",
 *       "categorie_name": "Actualité",
 *       "categorie_type": [],
 *       "state": true,
 *       "creating_id": "62e83c5dec3bd10095008e27",
 *       "description": "Tout l'actu sur l'automobile ",
 *       "order": 0,
 *       "createdAt": "2022-08-02T19:22:31.411Z",
 *       "updatedAt": "2022-08-02T19:29:45.697Z",
 *       "__v": 0
 *   },
 * @apiSampleRequest http://127.0.0.1:5000/api/categorie/
 */
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

/**
 * @api {put} /api/categorie/:id  Update categorie
 * @apiName updateCategorie
 * @apiGroup Categorie
 * @apiDescription methode API for update categorie
 * @apiParam {ObjectId} id  id of categorie.
 * @apiBody {String} categorie_name=Actualité categorie_name of categorie.
 * @apiBody {String} categorie_type=[] categorie_type of categorie.
 * @apiBody {Boolean} state=true state of categorie.
 * @apiBody {String} creating_id="62e83c5dec3bd10095008e27" creating_id of categorie.
 * @apiBody {String} description="Tout l'actu sur l'automobile " description of categorie.
 * @apiBody {Number} order=0 order of categorie.
 * @apiSuccess {Object} categorie Object with all categorie.
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *    {
 *       "_id": "62e9797750c2d1bcb4836cd5",
 *       "categorie_name": "Actualité",
 *       "categorie_type": [],
 *       "state": true,
 *       "creating_id": "62e83c5dec3bd10095008e27",
 *       "description": "Tout l'actu sur l'automobile ",
 *       "order": 0,
 *       "createdAt": "2022-08-02T19:22:31.411Z",
 *       "updatedAt": "2022-08-02T19:29:45.697Z",
 *       "__v": 0
 *   },
 * @apiSampleRequest http://127.0.0.1:5000/api/categorie/:id
 */
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
    order: req.body.order,
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

/**
 * @api {put} /api/categorie/:id  Update order categorie
 * @apiName updateOrder
 * @apiGroup Categorie
 * @apiDescription methode API for update categorie
 * @apiParam {ObjectId} id  id of categorie.
 * @apiBody {Number} order=0 order of categorie.
 * @apiSuccess {Object} categorie Object with all categorie.
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *    {
 *       "_id": "62e9797750c2d1bcb4836cd5",
 *       "categorie_name": "Actualité",
 *       "categorie_type": [],
 *       "state": true,
 *       "creating_id": "62e83c5dec3bd10095008e27",
 *       "description": "Tout l'actu sur l'automobile ",
 *       "order": 0,
 *       "createdAt": "2022-08-02T19:22:31.411Z",
 *       "updatedAt": "2022-08-02T19:29:45.697Z",
 *       "__v": 0
 *   },
 * @apiSampleRequest http://127.0.0.1:5000/api/categorie/:id
 */
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

/**
 * @api {put} /api/categorie/:id  Delete categorie
 * @apiName deleteCategorie
 * @apiGroup Categorie
 * @apiDescription methode API for delete categorie
 * @apiParam {ObjectId} id  id of categorie.
 * @apiBody {Number} order=0 order of categorie.
 * @apiSuccess {Object} categorie Object with all categorie.
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *    {
 *       "_id": "62e9797750c2d1bcb4836cd5",
 *       "categorie_name": "Actualité",
 *       "categorie_type": [],
 *       "state": true,
 *       "creating_id": "62e83c5dec3bd10095008e27",
 *       "description": "Tout l'actu sur l'automobile ",
 *       "order": 0,
 *       "createdAt": "2022-08-02T19:22:31.411Z",
 *       "updatedAt": "2022-08-02T19:29:45.697Z",
 *       "__v": 0
 *   },
 * @apiSampleRequest http://127.0.0.1:5000/api/categorie/:id
 */
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

/**
 * @api {get} /api/categorie/count  Get counter categorie
 * @apiName categorieCount
 * @apiGroup Categorie
 * @apiDescription methode API for get counter categorie
 * @apiSuccess {Object} categorie Object with counter categorie.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *   categorieCounter: 4
 * @apiSampleRequest http://127.0.0.1:5000/api/categorie
 */
  module.exports.categorieCount = (req, res) => {
  CategorieModel.count()
  .then((e)=>{
    res.send({count: e});
  })
};
