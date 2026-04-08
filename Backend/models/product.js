const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    category: String,

    model3d: String, // three.js model
    description: String
});

module.exports = mongoose.model("product", productSchema);