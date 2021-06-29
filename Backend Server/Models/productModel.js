const mongoose = require("mongoose");

const Schema = new mongoose.Schema({

  category:String,
  image:String,
  price:Number,
  type:String

});

const Product = mongoose.model("Product", Schema);

module.exports = Product;