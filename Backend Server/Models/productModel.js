const mongoose = require("mongoose");

const Schema = new mongoose.Schema({

  category:String,
  prod:String,
  price:Number,
  image:String,
  brand:String,
  color:[String],
  spec:String,
  type:String,

});

const Product = mongoose.model("Product", Schema);

module.exports = Product;