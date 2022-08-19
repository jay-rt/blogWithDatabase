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
      res.json("Post successfully saved");
    } catch (error) {
      res.send(error);
    }
  });

router.route("/:id").get(async (req, res) => {
  try {
    const post = await Post.findById({ _id: req.params.id });
    res.send(post);
  } catch (error) {
    res.send(error);
  }
});

export default router;
