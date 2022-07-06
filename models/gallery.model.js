const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    urlPicture: {
      type: String,
      required: true,
    },
    nom: {
      type: String,
      required: true,
    },
    seo: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("gallery", gallerySchema);

module.exports = UserModel;
