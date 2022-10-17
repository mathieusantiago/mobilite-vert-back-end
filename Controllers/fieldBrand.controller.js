//import model user in the controller
const fieldBrand = require("../models/fieldBrand.model");
//import dependencies jsonwebtoken
const ObjectID = require("mongoose").Types.ObjectId;


/**
 * @api {get} /api/fieldBrand/  Get all fieldBrand
 * @apiName getAllFieldBrand
 * @apiGroup FieldBrand
 * @apiDescription methode API for get all fieldBrand
 * @apiSuccess {Object} fieldBrand Object with all fieldBrand.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *   {
 *       "_id": ObjectId('63219b24fd2edcda69b76848'),
 *       "filed_name": 'test1',
 *       "chapo_field": 'test1',
 *       "content_field": 'test1',
 *       "createdAt": ISODate('2022-09-14T09:13:08.018Z'),
 *       "updatedAt": ISODate('2022-09-14T09:13:08.018Z'),
 *       "__v": 0
 *   } 
 *   {
 *       "_id": ObjectId('63219b24fd2edcda69b76848'),
 *       "filed_name": 'test2',
 *       "chapo_field": 'test2',
 *       "content_field": 'test2',
 *       "createdAt": ISODate('2022-09-14T09:13:08.018Z'),
 *       "updatedAt": ISODate('2022-09-14T09:13:08.018Z'),
 *       "__v": 0
 *   } 
 *   {
 *       "_id": ObjectId('63219b24fd2edcda69b76848'),
 *       "filed_name": 'test3',
 *       "chapo_field": 'test3',
 *       "content_field": 'test3',
 *       "createdAt": ISODate('2022-09-14T09:13:08.018Z'),
 *       "updatedAt": ISODate('2022-09-14T09:13:08.018Z'),
 *       "__v": 0
 *   }
 * @apiSampleRequest http://127.0.0.1:5000/api/fieldBrand
 */
module.exports.getAllFieldBrand = async (req, res) => {
  const dataFieldBrand = await fieldBrand.find().sort({ updatedAt: "desc" });
  res.status(200).json(dataFieldBrand);
};


/**
 * @api {get} /api/fieldBrand/:id  Get fieldBrand by id
 * @apiName getFieldBrandById
 * @apiGroup FieldBrand
 * @apiParam {ObjectId} id  id for fieldBrand.
 * @apiDescription methode API for get the fieldBrand by id
 * @apiSuccess {Object} fieldBrand Object with fieldBrand.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *   {
 *       "_id": ObjectId('63219b24fd2edcda69b76848'),
 *       "filed_name": 'test1',
 *       "chapo_field": 'test1',
 *       "content_field": 'test1',
 *       "createdAt": ISODate('2022-09-14T09:13:08.018Z'),
 *       "updatedAt": ISODate('2022-09-14T09:13:08.018Z'),
 *       "__v": 0
 *   }
 * @apiSampleRequest http://127.0.0.1:5000/api/fieldBrand/:id
 */
module.exports.getFieldBrandById = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(404).send("ID unknow : " + req.params.id);
  }
  fieldBrand.findById(req.params.id, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("ID unknow : " + err);
    }
  })
};


/**
 * @api {post} /api/fieldBrand/  Create fieldBrand
 * @apiName createFieldBrand
 * @apiGroup FieldBrand
 * @apiDescription methode API for create the fieldBrand
 * @apiBody {String} filed_name=test1 filed_name of fieldBrand.
 * @apiBody {String} content_field=test1 content_field of fieldBrand.
 * @apiBody {String} chapo_field=test1 chapo_field of fieldBrand.
 * @apiSuccess {Object} fieldBrand Object with fieldBrand created.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *   {
 *       "_id": ObjectId('63219b24fd2edcda69b76848'),
 *       "filed_name": 'test1',
 *       "chapo_field": 'test1',
 *       "content_field": 'test1',
 *       "brandFlag": 'https://urlimage.com
 *       "createdAt": ISODate('2022-09-14T09:13:08.018Z'),
 *       "updatedAt": ISODate('2022-09-14T09:13:08.018Z'),
 *       "__v": 0
 *   }
 * @apiSampleRequest http://127.0.0.1:5000/api/fieldBrand
 */
module.exports.createFieldBrand = async (req, res) => {
  const newFieldBrand = new fieldBrand({
    filed_name: req.body.filed_name, //
    content_field: req.body.content_field, //
    chapo_field: req.body.chapo_field, //
    brandFlag: req.body.brandFlag
  });
  try {
    const field = await newFieldBrand.save();
    console.log("📄 content field created");
    return res.status(201).json(field);
  } catch (err) {
    console.log("❌ 📄 errors for the created field energy");

    return res.status(400).send(err);
  }
};


/**
 * @api {put} /api/fieldBrand/:id  Update fieldBrand
 * @apiName updateFieldBrand
 * @apiGroup FieldBrand
 * @apiDescription methode API for update the fieldBrand
 * @apiParam {ObjectId} id  id for fieldBrand.
 * @apiBody {String} filed_name=test1 filed_name of fieldBrand.
 * @apiBody {String} content_field=test1 content_field of fieldBrand.
 * @apiBody {String} chapo_field=test1 chapo_field of fieldBrand.
 * @apiSuccess {Object} fieldBrand Object with fieldBrand updated.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *   {
 *       "_id": ObjectId('63219b24fd2edcda69b76848'),
 *       "filed_name": 'test1',
 *       "chapo_field": 'test1',
 *       "content_field": 'test1',
 *       "brandFlag": 'https://urlimage.com
 *       "createdAt": ISODate('2022-09-14T09:13:08.018Z'),
 *       "updatedAt": ISODate('2022-09-14T09:13:08.018Z'),
 *       "__v": 0
 *   }
 * @apiSampleRequest http://127.0.0.1:5000/api/fieldBrand/:id
 */
module.exports.updateFieldBrand = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send(err);
  }
  const updatedRecord = {
    filed_name: req.body.filed_name, 
    content_field: req.body.content_field, 
    chapo_field: req.body.chapo_field, 
    brandFlag: req.body.brandFlag
  };
  fieldBrand.findByIdAndUpdate(
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


/**
 * @api {delete} /api/fieldBrand/:id  Deleted fieldBrand
 * @apiName deletefieldBrand
 * @apiGroup FieldBrand
 * @apiDescription methode API for delete the fieldBrand
 * @apiParam {ObjectId} id  id for fieldBrand.
 * @apiSuccess {Object} fieldBrand Object with fieldBrand deleted.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *   {
 *       "_id": ObjectId('63219b24fd2edcda69b76848'),
 *       "filed_name": 'test1',
 *       "chapo_field": 'test1',
 *       "content_field": 'test1',
 *       "createdAt": ISODate('2022-09-14T09:13:08.018Z'),
 *       "updatedAt": ISODate('2022-09-14T09:13:08.018Z'),
 *       "__v": 0
 *   }
 * @apiSampleRequest http://127.0.0.1:5000/api/fieldBrand/:id
 */
module.exports.deleteFieldBrand = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("ID unknown : " + req.params.id);
  }

  fieldBrand.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) {
      console.log("❌ role fieldEnergy");
      res.send(docs);
    } else {
      console.log("❌ Delete fieldEnergy error : " + err);
    }
  });
};

/**
 * @api {get} /api/fieldBrand/count  Get counter fieldBrand
 * @apiName fieldBrandCount
 * @apiGroup FieldBrand
 * @apiDescription methode API for get counter fieldBrand
 * @apiSuccess {Object} fieldBrand Object with counter fieldBrand.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *   fieldBrandCounter: 4
 * @apiSampleRequest http://127.0.0.1:5000/api/fieldBrand
 */
 module.exports.fieldBrandCount = (req, res) => {
  fieldBrand.count()
  .then((e)=>{
    res.send({count: e});
  })
};