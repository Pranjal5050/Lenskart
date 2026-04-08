const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api/products", productRoutes);

// DB connection
mongoose.connect("mongodb://127.0.0.1:27017/lenskart")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(5000, () => {
    console.log("Server running on port 5000");
});