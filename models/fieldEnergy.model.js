const mongoose = require("mongoose");

const fiedEnergySchema = new mongoose.Schema(
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
      type: [],
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("field_energy", fiedEnergySchema);

module.exports = UserModel;
