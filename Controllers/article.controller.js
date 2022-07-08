const ArticleModel = require("../models/article.model");
const ObjectID = require("mongoose").Types.ObjectId;

//Controller for get list of all article
module.exports.readArticle = (req, res) => {
  ArticleModel.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("❌ errors to get article");
    }
  }).sort({updatedAt: 'desc'});
};

//Controller for get article by id
module.exports.getAllArticleById = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(404).send("ID unknow : " + req.params.id);
  }
  ArticleModel.findById(req.params.id, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("ID unknow : " + err);
    }
  }).select("-password");
};

//Controller for create new article
module.exports.createArticle = async (req, res) => {
  const newArticle = new ArticleModel({
    profil_name: req.body.profil_name, //
    article_title: req.body.article_title, //
    status: req.body.status, //
    editing_id: req.body.editing_id, //
    chapo: req.body.chapo, //
    content_article: req.body.content_article, //
    categories: req.body.categories, //
    content_subarticle: req.body.content_subarticle, //
    tags: req.body.tags, //
    author: req.body.signatur,
    putInOne: req.body.putInOne,
    presCategorie: req.body.presCategorie,
    notDisplayHomepage: req.body.notDisplayHomepage,
    withoutPub: req.body.withoutPub,
    presTitle: req.body.presTitle,
    presChapo: req.body.presChapo,
    presArticle: req.body.presArticle,
    tilteSeo: req.body.tilteSeo,
    contentSeo: req.body.contentSeo,
    mainPicture: req.body.mainPicture,
    galleryPicture : req.body.galleryPicture
  });
  try {
    const article = await newArticle.save();
    console.log("📄 article created");
    return res.status(201).json(article);
  } catch (err) {
    console.log("❌ 📄 errors for the created article");

    return res.status(400).send(err);
  }
};

//Controller for update selected article
module.exports.updateArticle = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send(err);
  }
  const updatedRecord = {
    profil_name: req.body.profil_name,
    article_title: req.body.article_title,
    publish_date: req.body.publish_date,
    status: req.body.status,
    editing_id: req.body.editing_id,
    chapo: req.body.chapo,
    content_article: req.body.content_article,
    categories: req.body.categories,
  };
  ArticleModel.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    { new: true },
    (err, docs) => {
      if (!err) {
        console.log("📩 update article");
        return res.send(docs);
      } else {
        console.log("❌ 📄 update article errors");
      }
    }
  );
};

//Controller for delete selected article
module.exports.deleteArticle = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("ID unknown : " + req.params.id);
  }

  ArticleModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) {
      console.log("❌ article deleted");
      res.send(docs);
    } else {
      console.log("❌ Delete error : " + err);
    }
  });
};
