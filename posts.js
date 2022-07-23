const mongoose = require("mongoose");

//Defining a Schema
const postSchema = new mongoose.Schema({
  landingPage: String,
  title: String,
  content: String,
});

//Exporting the model
module.exports = mongoose.model("Post", postSchema);
