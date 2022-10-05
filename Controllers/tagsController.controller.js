//import model user in the controller
const tagsModel = require("../models/tagsModel.model");
//import dependencies jsonwebtoken
const ObjectID = require("mongoose").Types.ObjectId;


/**
 * @api {get} /api/tags Get All Tags
 * @apiName getAllDataTags
 * @apiGroup Tags
 * @apiDescription methode API for get all tags
 * @apiSuccess {Object} tags Object with all info of tag.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *      {
 *          _id: ObjectId('63237818ea57378f5f1e0346'),
 *          tags_name: '#electric',
 *          link_field: '632180598b98ff1591d9ea85',
 *          status_tags: true,
 *          createdAt: ISODate('2022-09-15T19:08:08.925Z'),
 *          updatedAt: ISODate('2022-09-15T19:08:08.925Z'),
 *          __v: 0
 *      }
 *      {
 *          _id: ObjectId('63238255ea57378f5f1e07db'),
 *          tags_name: '#Peugeot208',
 *          link_field: '632180598b98ff1591d9ea84',
 *          status_tags: true,
 *          createdAt: ISODate('2022-09-15T19:51:49.683Z'),
 *          updatedAt: ISODate('2022-09-15T19:51:49.683Z'),
 *          __v: 0
 *      }
 * @apiSampleRequest http://127.0.0.1:5000/api/tags
 */
module.exports.getAllDataTags = async (req, res) => {
  const datatags = await tagsModel.find().sort({ updatedAt: "desc" });
  res.status(200).json(datatags);
};


/**
 * @api {get} /api/tags/:id Get tags by id
 * @apiName getDataTagsById
 * @apiGroup Tags
 * @apiDescription methode API for get all tags
 * @apiParam {ObjectId} id tags unique ObjectId.
 * @apiSuccess {Object} tags Object with all info of tag.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *      {
 *          _id: ObjectId('63238255ea57378f5f1e07db'),
 *          tags_name: '#Peugeot208',
 *          link_field: '632180598b98ff1591d9ea84',
 *          status_tags: true,
 *          createdAt: ISODate('2022-09-15T19:51:49.683Z'),
 *          updatedAt: ISODate('2022-09-15T19:51:49.683Z'),
 *          __v: 0
 *      }
 * @apiSampleRequest http://127.0.0.1:5000/api/tags/:id
 */
module.exports.getDataTagsById = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(404).send("ID unknow : " + req.params.id);
  }
  tagsModel.findById(req.params.id, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("ID unknow : " + err);
    }
  })
};


/**
 * @api {post} /api/tags/  Create new tags 
 * @apiName createDataTags
 * @apiGroup Tags
 * @apiDescription methode API for create new tags
 * @apiBody {String} tags_name=#Peugeot208  Tags_name of tags.
 * @apiBody {String} link_field=632180598b98ff1591d9ea84 Link_field of tags.
 * @apiBody {Boolean} status_tags=true Status_tags of tags.
 * @apiSuccess {Object} tags Object with info of tag created.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *      {
 *          "_id": ObjectId('63238255ea57378f5f1e07db'),
 *          "tags_name": '#Peugeot208',
 *          "link_field": '632180598b98ff1591d9ea84',
 *          "status_tags": true,
 *          "createdAt": ISODate('2022-09-15T19:51:49.683Z'),
 *          "updatedAt": ISODate('2022-09-15T19:51:49.683Z'),
 *          "__v": 0
 *      }
 * @apiSampleRequest http://127.0.0.1:5000/api/tags
 */
module.exports.createDataTags = async (req, res) => {
  const newdatatags = new tagsModel({
    tags_name: req.body.tags_name, 
    link_field: req.body.link_field, 
    status_tags: req.body.status_tags, 
  });
  console.log(req.body)

  try {
    const tags = await newdatatags.save();
    console.log("📄 content field created");
    return res.status(201).json(tags);
  } catch (err) {
    console.log("❌ 📄 errors for the created field energy");

    return res.status(400).send(err);
  }
};

/**
 * @api {put} /api/tags/:id  Update tags 
 * @apiName upDatedataTags
 * @apiGroup Tags
 * @apiDescription methode API for update new tags
 * @apiParam {ObjectId} id tags unique ObjectId.
 * @apiBody {String} tags_name=#Peugeot208  Tags_name of tags.
 * @apiBody {String} link_field=632180598b98ff1591d9ea84 Link_field of tags.
 * @apiBody {Boolean} status_tags=true Status_tags of tags.
 * @apiSuccess {Object} tags Object with info of tag updated.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *      {
 *          "_id": ObjectId('63238255ea57378f5f1e07db'),
 *          "tags_name": '#Peugeot208',
 *          "link_field": '632180598b98ff1591d9ea84',
 *          "status_tags": true,
 *          "createdAt": ISODate('2022-09-15T19:51:49.683Z'),
 *          "updatedAt": ISODate('2022-09-15T19:51:49.683Z'),
 *          "__v": 0
 *      }
 * @apiSampleRequest http://127.0.0.1:5000/api/tags/:id
 */
module.exports.upDatedataTags = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send(err);
  }
  console.log('tags', req.params.id)
  const updatedRecord = {
    tags_name: req.body.tags_name, //
    link_field: req.body.link_field, //
    status_tags: req.body.status_tags, //
  };
  tagsModel.findByIdAndUpdate(
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
 * @api {delete} /api/tags/:id  Delete new tags 
 * @apiName deleteDataTags
 * @apiGroup Tags
 * @apiDescription methode API for delete tags
 * @apiParam {ObjectId} id tags unique ObjectId.
 * @apiSuccess {Object} tags Object with info of tag deleted.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *      {
 *          "_id": ObjectId('63238255ea57378f5f1e07db'),
 *          "tags_name": '#Peugeot208',
 *          "link_field": '632180598b98ff1591d9ea84',
 *          "status_tags": true,
 *          "createdAt": ISODate('2022-09-15T19:51:49.683Z'),
 *          "updatedAt": ISODate('2022-09-15T19:51:49.683Z'),
 *          "__v": 0
 *      }
 * @apiSampleRequest http://127.0.0.1:5000/api/tags/:id
 */
module.exports.deleteDataTags = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("ID unknown : " + req.params.id);
  }

  tagsModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) {
      console.log("❌ role fieldEnergy");
      res.send(docs);
    } else {
      console.log("❌ Delete fieldEnergy error : " + err);
    }
  });
};