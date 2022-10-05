const mongoose = require("mongoose");

const tagsSchema = new mongoose.Schema(
  {
    tags_name: {
      type: String,
      required: true,
    },
    link_field: {
      type: String,
      required: true,
    },
    status_tags: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("tags", tagsSchema);

module.exports = UserModel;
