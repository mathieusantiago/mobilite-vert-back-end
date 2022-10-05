//import model user in the controller
const fieldModel = require("../models/fieldModel.model");
//import dependencies jsonwebtoken
const ObjectID = require("mongoose").Types.ObjectId;

/**
 * @api {get} /api/fieldModel/  Get all fieldModel
 * @apiName getAllFieldModel
 * @apiGroup FieldModel
 * @apiDescription methode API for get all fieldModel
 * @apiSuccess {Object} fieldModel Object with all fieldModel.
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
 * @apiSampleRequest http://127.0.0.1:5000/api/fieldModel
 */
module.exports.getAllFieldModel = async (req, res) => {
  const dataFieldModel = await fieldModel.find().sort({ updatedAt: "desc" });
  res.status(200).json(dataFieldModel);
};


/**
 * @api {get} /api/fieldModel/:id  Get fieldModel by id
 * @apiName getFieldModelById
 * @apiGroup FieldModel
 * @apiParam {ObjectId} id  id for FieldModel.
 * @apiDescription methode API for get the fieldModel by id
 * @apiSuccess {Object} fieldModel Object with fieldModel.
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
 * @apiSampleRequest http://127.0.0.1:5000/api/fieldModel/:id
 */
module.exports.getFieldModelById = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(404).send("ID unknow : " + req.params.id);
  }
  fieldModel.findById(req.params.id, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("ID unknow : " + err);
    }
  })
};

/**
 * @api {post} /api/fieldModel/  Create fieldModel
 * @apiName createFieldModel
 * @apiGroup FieldModel
 * @apiDescription methode API for create the fieldModel
 * @apiBody {String} filed_name=test1 filed_name of fieldModel.
 * @apiBody {String} content_field=test1 content_field of fieldModel.
 * @apiBody {String} chapo_field=test1 chapo_field of fieldModel.
 * @apiSuccess {Object} fieldModel Object with fieldModel created.
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
 * @apiSampleRequest http://127.0.0.1:5000/api/fieldModel
 */
module.exports.createFieldModel = async (req, res) => {
  const newFieldModel = new fieldModel({
    filed_name: req.body.filed_name, //
    content_field: req.body.content_field, //
    chapo_field: req.body.chapo_field, //
  });
  try {
    const field = await newFieldModel.save();
    console.log("📄 content field created");
    return res.status(201).json(field);
  } catch (err) {
    console.log("❌ 📄 errors for the created field energy");

    return res.status(400).send(err);
  }
};

/**
 * @api {put} /api/fieldModel/:id  Update fieldModel
 * @apiName updateFieldModel
 * @apiGroup FieldModel
 * @apiDescription methode API for update the fieldModel
 * @apiParam {ObjectId} id  id for FieldModel.
 * @apiBody {String} filed_name=test1 filed_name of fieldModel.
 * @apiBody {String} content_field=test1 content_field of fieldModel.
 * @apiBody {String} chapo_field=test1 chapo_field of fieldModel.
 * @apiSuccess {Object} fieldModel Object with fieldModel updated.
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
 * @apiSampleRequest http://127.0.0.1:5000/api/fieldModel/:id
 */
module.exports.updateFieldModel = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send(err);
  }
  const updatedRecord = {
    filed_name: req.body.filed_name, 
    content_field: req.body.content_field, 
    chapo_field: req.body.chapo_field, 
  };
  fieldModel.findByIdAndUpdate(
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
 * @api {delete} /api/fieldModel/:id  Deleted fieldModel
 * @apiName deleteFieldModel
 * @apiGroup FieldModel
 * @apiDescription methode API for delete the fieldModel
 * @apiParam {ObjectId} id  id for FieldModel.
 * @apiSuccess {Object} fieldModel Object with fieldModel deleted.
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
 * @apiSampleRequest http://127.0.0.1:5000/api/fieldModel/:id
 */
module.exports.deleteFieldModel = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("ID unknown : " + req.params.id);
  }

  fieldModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) {
      console.log("❌ role fieldEnergy");
      res.send(docs);
    } else {
      console.log("❌ Delete fieldEnergy error : " + err);
    }
  });
};