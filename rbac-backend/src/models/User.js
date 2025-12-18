const mongoose = require("mongoose");
const ROLES = require("../config/roles");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: Object.values(ROLES),
    default: ROLES.MEMBER,
  },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
