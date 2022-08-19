import mongoose from "mongoose";

//Defining a Schema
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

//Exporting the model
const Post = mongoose.model("Post", postSchema);

export default Post;
