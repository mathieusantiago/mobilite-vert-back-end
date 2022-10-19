//import model user in the controller
const fieldEnergy = require("../models/fieldEnergy.model");
//import dependencies jsonwebtoken
const ObjectID = require("mongoose").Types.ObjectId;

/**
 * @api {get} /api/fieldEnergy/  Get all fieldEnergy
 * @apiName getAllFieldEnergy
 * @apiGroup FieldEnergy
 * @apiDescription methode API for get all fieldEnergy
 * @apiSuccess {Object} fieldEnergy Object with all fieldEnergy.
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
 * @apiSampleRequest http://127.0.0.1:5000/api/fieldEnergy
 */
module.exports.getAllFieldEnergy = async (req, res) => {
  const dataFieldEnergy = await fieldEnergy.find().sort({ updatedAt: "desc" });
  res.status(200).json(dataFieldEnergy);
};

/**
 * @api {get} /api/fieldEnergy/:id  Get fieldEnergy by id
 * @apiName getFieldEnergyById
 * @apiGroup FieldEnergy
 * @apiParam {ObjectId} id  id for FieldEnergy.
 * @apiDescription methode API for get the fieldEnergy by id
 * @apiSuccess {Object} fieldEnergy Object with fieldEnergy.
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
 * @apiSampleRequest http://127.0.0.1:5000/api/fieldEnergy/:id
 */
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

/**
 * @api {post} /api/fieldEnergy/  Create fieldEnergy
 * @apiName createFieldEnergy
 * @apiGroup FieldEnergy
 * @apiDescription methode API for create the fieldEnergy
 * @apiBody {String} filed_name=test1 filed_name of fieldEnergy.
 * @apiBody {String} content_field=test1 content_field of fieldEnergy.
 * @apiBody {String} chapo_field=test1 chapo_field of fieldEnergy.
 * @apiSuccess {Object} fieldEnergy Object with fieldEnergy created.
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
 * @apiSampleRequest http://127.0.0.1:5000/api/fieldEnergy
 */
module.exports.createFieldEnergy = async (req, res) => {
  const newFieldEnergy = new fieldEnergy({
    filed_name: req.body.filed_name, //
    content_field: req.body.content_field, //
    chapo_field: req.body.chapo_field, //
    model: req.body.model 
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

/**
 * @api {put} /api/fieldEnergy/:id  Update fieldEnergy
 * @apiName updateFieldEnergy
 * @apiGroup FieldEnergy
 * @apiDescription methode API for update the fieldEnergy
 * @apiParam {ObjectId} id  id for fieldEnergy.
 * @apiBody {String} filed_name=test1 filed_name of fieldEnergy.
 * @apiBody {String} content_field=test1 content_field of fieldEnergy.
 * @apiBody {String} chapo_field=test1 chapo_field of fieldEnergy.
 * @apiSuccess {Object} fieldEnergy Object with fieldEnergy updated.
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
 * @apiSampleRequest http://127.0.0.1:5000/api/fieldEnergy/:id
 */
module.exports.updateFieldEnergy = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send(err);
  }
  const updatedRecord = {
    filed_name: req.body.filed_name, 
    content_field: req.body.content_field, 
    chapo_field: req.body.chapo_field,
    model: req.body.model 
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

/**
 * @api {delete} /api/fieldEnergy/:id  Deleted fieldEnergy
 * @apiName deleteFieldEnergy
 * @apiGroup FieldEnergy
 * @apiDescription methode API for delete the fieldEnergy
 * @apiParam {ObjectId} id  id for fieldEnergy.
 * @apiSuccess {Object} fieldEnergy Object with fieldEnergy deleted.
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
 * @apiSampleRequest http://127.0.0.1:5000/api/fieldEnergy/:id
 */
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

/**
 * @api {get} /api/fieldEnergy/count  Get counter fieldEnergy
 * @apiName fieldEnergyCount
 * @apiGroup FieldEnergy
 * @apiDescription methode API for get counter fieldEnergy
 * @apiSuccess {Object} fieldEnergy Object with counter fieldEnergy.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *   fieldEnergyCounter: 4
 * @apiSampleRequest http://127.0.0.1:5000/api/fieldEnergy
 */
 module.exports.fieldEnergyCount = (req, res) => {
  fieldEnergy.count()
  .then((e)=>{
    res.send({count: e});
  })
};