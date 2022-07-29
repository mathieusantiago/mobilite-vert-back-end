const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema(
  {
    roleName: {
      type: String,
      required: true,
    },
    read: {
      type: Boolean,
      required: true,
    },
    write: {
      type: Boolean,
      required: true,
    },
    upDate: {
      type: Boolean,
      required: true,
    },
    admin: {
      type: Boolean,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("roles", roleSchema);

module.exports = UserModel;
