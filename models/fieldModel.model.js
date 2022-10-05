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
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("field_model", fiedModelSchema);

module.exports = UserModel;
