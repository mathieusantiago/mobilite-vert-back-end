const mongoose = require("mongoose");

const fiedModelSchema = new mongoose.Schema(
  {
    filed_name: {
      type: String,
      required: true,
    },
    chapo_field: {
      type: String,
    },
    content_field: {
      type: String,
    },
    model: {
      type: String,
      required: true,

    },
    imgCar: {
      type: String,
      required: true,

    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("field_model", fiedModelSchema);

module.exports = UserModel;
