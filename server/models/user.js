const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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
  date: {
    type: Date,
    default: Date.now,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isAuthorized: {
    type: Boolean,
    default: false,
  },
  bookmarked_events: {
    type: [String],
  },
  contact_email: {
    type: String,
    default: "",
  },
  contact_phone: {
    type: Number,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  visible: {
    type: Boolean,
    default: true,
  },
});

module.exports = UserModel = mongoose.model("users", UserSchema);
