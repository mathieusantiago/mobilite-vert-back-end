const mongoose = require("mongoose");

const categorieSchema = new mongoose.Schema(
  {
    categorie_name: {
      type: String,
      required: true,
      unique: true,
    },
    categorie_type: {
      type: [
        {
          name_type:String,
          status: Boolean,
          description: String,

        }
      ],
      required: true,
    },
    state:{
      type: Boolean,
      required: true
    },
    creating_id: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("categorie", categorieSchema);

module.exports = UserModel;
