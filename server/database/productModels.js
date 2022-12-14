
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  field: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  instock: {
    type: Boolean,
    default: true,
  },
  description: {
    type: String,
    default: "latest available of this generation ",
  },
  imageUrl: String,
});

const product=mongoose.model("products",productSchema)
module.exports = product;
