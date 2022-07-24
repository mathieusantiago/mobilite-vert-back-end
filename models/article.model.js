const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    profil_name: {
      type: String,
      required: true,
    },
    categories: {
      type: String,
      required: true,
    },
    article_title: {
      type: String,
      required: true,
    },
    mainPicture:{
      type: String,
      required: true,
    },
    galleryPicture:{
      type: Array,
    },
    chapo:{
      type: String,
    },
    content_article:{
      type: String,
    },
    content_subarticle:{
      type: String,
    },
    tags:{
      type: String,
    },
    author:{
      type: String,
    },
    presCategorie: {
      type: String,
    },
    putInOne: {
      type: Boolean,
    },
    notDisplayHomepage: {
      type: Boolean,
    },
    withoutPub: {
      type: Boolean,
    },
    presTitle: {
      type: String,
    },
    presChapo: {
      type: String,
    },
    presArticle: {
      type: String,
    },
    tilteSeo: {
      type: String,
    },
    contentSeo: {
      type: String,
    },
    status: {
      type: String,
      required: true,
    },
    editing_id: {
      type: String,
      required: true,
    },
    secondaryPicture:{
      type:String,
    }
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("article", articleSchema);

module.exports = UserModel;
