//importing necessary modules
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import postRouter from "./routes/post.js";

//Creating a mongodb connection
mongoose.connect("mongodb://127.0.0.1:27017/blogDB");

//Creating a new instance of express
const app = express();

// configuring cors
const corsOption = {
  origin: "http://localhost:5000",
};

app.use(cors(corsOption));

app.use(express.json());
app.use("/posts", postRouter);

//Listening for connection at specific port
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
