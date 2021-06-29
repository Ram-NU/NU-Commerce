const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  Mail: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  Password: {
    type: String,
    required: true,
    trim: true,
  },
});

const Login = mongoose.model("Login", Schema);

module.exports = Login;