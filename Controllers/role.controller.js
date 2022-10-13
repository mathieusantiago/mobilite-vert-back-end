const RoleModel = require("../models/role.model");
const ObjectID = require("mongoose").Types.ObjectId;


/**
 * @api {get} /api/role/  Get all role
 * @apiName readRole
 * @apiGroup Role
 * @apiDescription methode API for get all role
 * @apiSuccess {Object} role Object with role deleted.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *          {
 *              "_id": ObjectId('62e97b5950c2d1bcb4836dc2'),
 *              "roleName": 'Administrateur',
 *              "read": true,
 *              "write": true,
 *              "upDate": true,
 *              "admin": true,
 *              "status": true,
 *              "createdAt": ISODate('2022-08-02T19:30:33.431Z'),
 *              "updatedAt": ISODate('2022-08-02T19:32:31.668Z'),
 *              "__v": 0
 *          }
 *          {
 *              "_id": ObjectId('62e97bc150c2d1bcb4836dd3'),
 *              "roleName": 'Chef de projet multimédia',
 *              "read": true,
 *              "write": true,
 *              "upDate": true,
 *              "admin": false,
 *              "status": true,
 *              "createdAt": ISODate('2022-08-02T19:32:17.514Z'),
 *              "updatedAt": ISODate('2022-08-02T19:32:41.039Z'),
 *              "__v": 0
 *          }
 *          {
 *              "_id": ObjectId('62e97c3650c2d1bcb4836e00'),
 *              "roleName": 'Editorialiste',
 *              "read": true,
 *              "write": true,
 *              "upDate": true,
 *              "admin": false,
 *              "status": true,
 *              "createdAt": ISODate('2022-08-02T19:34:14.375Z'),
 *              "updatedAt": ISODate('2022-08-02T19:34:14.375Z'),
 *              "__v": 0
 *          }
 * @apiSampleRequest http://127.0.0.1:5000/api/role
 */
module.exports.readRole = (req, res) => {
  RoleModel.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("❌ errors to get article");
    }
  }).sort({ updatedAt: "desc" });
};


/**
 * @api {post} /api/role/  Create new role
 * @apiName createRole
 * @apiGroup Role
 * @apiDescription methode API for create  role
 * @apiBody {String} roleName=Administrateur  roleName of role.
 * @apiBody {Boolean} read=true read of role.
 * @apiBody {Boolean} write=true write of role.
 * @apiBody {Boolean} upDate=true  upDate of role.
 * @apiBody {Boolean} admin=true admin of role.
 * @apiBody {Boolean} status=true status of role.
 * @apiSuccess {Object} tags Object with role created.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *          {
 *              "_id": ObjectId('62e97b5950c2d1bcb4836dc2'),
 *              "roleName": 'Administrateur',
 *              "read": true,
 *              "write": true,
 *              "upDate": true,
 *              "admin": true,
 *              "status": true,
 *              "createdAt": ISODate('2022-08-02T19:30:33.431Z'),
 *              "updatedAt": ISODate('2022-08-02T19:32:31.668Z'),
 *              "__v": 0
 *          }
 * @apiSampleRequest http://127.0.0.1:5000/api/role
 */
module.exports.createRole = async (req, res) => {
  const newRole = new RoleModel({
    roleName: req.body.roleName,
    read: req.body.read,
    write: req.body.write,
    upDate: req.body.upDate,
    admin: req.body.admin,
    status: req.body.status,
  });
  try {
    const role = await newRole.save();
    console.log("📄 role created");
    return res.status(201).json(role);
  } catch (err) {
    console.log("❌ 📄 errors for the created role");

    return res.status(400).send(err);
  }
};

/**
 * @api {put} /api/role/:id  Update role
 * @apiName updateRole
 * @apiGroup Role
 * @apiDescription methode API for update  role
 * @apiParam {ObjectId} id role unique ObjectId.
 * @apiBody {String} roleName=Administrateur  roleName of role.
 * @apiBody {Boolean} read=true read of role.
 * @apiBody {Boolean} write=true write of role.
 * @apiBody {Boolean} upDate=true  upDate of role.
 * @apiBody {Boolean} admin=true admin of role.
 * @apiBody {Boolean} status=true status of role.
 * @apiSuccess {Object} role Object with role updated.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *          {
 *              "_id": ObjectId('62e97b5950c2d1bcb4836dc2'),
 *              "roleName": 'Administrateur',
 *              "read": true,
 *              "write": true,
 *              "upDate": true,
 *              "admin": true,
 *              "status": true,
 *              "createdAt": ISODate('2022-08-02T19:30:33.431Z'),
 *              "updatedAt": ISODate('2022-08-02T19:32:31.668Z'),
 *              "__v": 0
 *          }
 * @apiSampleRequest http://127.0.0.1:5000/api/role/:id
 */
module.exports.updateRole = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send(err);
  }
  const updatedRecord = {
    read: req.body.read,
    write: req.body.write,
    upDate: req.body.upDate,
    admin: req.body.admin,
    status: req.body.status,
  };
  RoleModel.findByIdAndUpdate(
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
 * @api {delete} /api/role/:id  Deleted role
 * @apiName deleteRole
 * @apiGroup Role
 * @apiDescription methode API for delete role
 * @apiParam {ObjectId} id subcategorie unique ObjectId.
 * @apiSuccess {Object} role Object with role deleted.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *          {
 *              "_id": ObjectId('62e97b5950c2d1bcb4836dc2'),
 *              "roleName": 'Administrateur',
 *              "read": true,
 *              "write": true,
 *              "upDate": true,
 *              "admin": true,
 *              "status": true,
 *              "createdAt": ISODate('2022-08-02T19:30:33.431Z'),
 *              "updatedAt": ISODate('2022-08-02T19:32:31.668Z'),
 *              "__v": 0
 *          }
 * @apiSampleRequest http://127.0.0.1:5000/api/role/:id
 */
module.exports.deleteRole = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("ID unknown : " + req.params.id);
  }

  RoleModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) {
      console.log("❌ role deleted");
      res.send(docs);
    } else {
      console.log("❌ Delete error : " + err);
    }
  });
};

/**
 * @api {get} /api/role/count  Get counter role
 * @apiName roleCount
 * @apiGroup Role
 * @apiDescription methode API for get counter role
 * @apiSuccess {Object} role Object with counter role.
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *   roleCounter: 4
 * @apiSampleRequest http://127.0.0.1:5000/api/role
 */
 module.exports.roleCount = (req, res) => {
  RoleModel.count()
  .then((e)=>{
    res.send({count: e});
  })
};