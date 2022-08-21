import { Router } from "express";
import Post from "../models/post-model.js";

const router = Router();

router
  .route("/")
  .get(async (req, res) => {
    try {
      const posts = await Post.find();
      res.send(posts);
    } catch (error) {
      res.send(error);
    }
  })
  .post(async (req, res) => {
    try {
      const post = new Post({
        title: req.body.title,
        content: req.body.content,
      });
      await post.save();
      res.json("New post successfully saved");
    } catch (error) {
      res.send(error);
    }
  });

router
  .route("/:id")
  .get(async (req, res) => {
    try {
      const post = await Post.findById({ _id: req.params.id });
      res.send(post);
    } catch (error) {
      res.send(error);
    }
  })
  .put(async (req, res) => {
    try {
      await Post.replaceOne(
        { _id: req.params.id },
        { title: req.body.title, content: req.body.content }
      );
      res.json("Current post successfully updated");
    } catch (error) {
      console.log(error);
    }
  })
  .delete(async (req, res) => {
    try {
      await Post.deleteOne({ _id: req.params.id });
      res.json("Successfully deleted the post.");
    } catch (error) {
      console.log(error);
    }
  });

export default router;
