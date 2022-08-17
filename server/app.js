//requiring necessary modules
const express = require("express");
const mongoose = require("mongoose");
const _ = require("lodash");
const ejs = require("ejs");
const Post = require("./models/posts");

//Default content for the blog
const homeContent = new Post({
  landingPage: "home",
  title: "Home",
  content:
    "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.",
});

const aboutContent = new Post({
  landingPage: "about",
  title: "About",
  content:
    "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
});

const contactContent = new Post({
  landingPage: "contact",
  title: "Contact",
  content:
    "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.",
});

//Creating a mongodb connection
mongoose.connect("mongodb://127.0.0.1:27017/blogDB");

//Creating a new instance of express
const app = express();

//Setting up the view engine
app.set("view engine", "ejs");

//Parsing the body element
app.use(express.urlencoded({ extended: true }));

//Serving static files
app.use(express.static("public"));

//GET Request
app.get("/", async (req, res) => {
  //Searching for all post with landingPage of value home
  const home = await Post.find({ landingPage: "home" });
  //If no post are available, save the default post and redirect to root route.
  if (home.length === 0) {
    await homeContent.save();
    res.redirect("/");
  } else {
    //Searching for blog posts in case home has default post and rendering it in home page.
    const posts = await Post.find({ landingPage: "homePlusIndividual" });
    res.render("home", {
      homeContent: homeContent,
      postedContent: posts,
    });
  }
});

app.get("/about", async (req, res) => {
  const about = await Post.find({ landingPage: "about" });
  if (about.length === 0) {
    await aboutContent.save();
    res.redirect("/about");
  } else {
    res.render("about", { aboutContent: aboutContent });
  }
});

app.get("/contact", async (req, res) => {
  const contact = await Post.find({ landingPage: "contact" });
  if (contact.length === 0) {
    await contactContent.save();
    res.redirect("/contact");
  } else {
    res.render("contact", { contactContent: contactContent });
  }
});

app.get("/compose", (req, res) => {
  res.render("compose");
});

//Using route parameters to extract the id being passed
app.get("/posts/:postId", async (req, res) => {
  const requestedPostId = req.params.postId;
  //Using the obtained id to find the post being passed
  const post = await Post.findById(requestedPostId);
  res.render("post", { post: post });
});

//POST Request
app.post("/compose", async (req, res) => {
  //Capturing the value from form and saving a new post
  const post = new Post({
    landingPage: "homePlusIndividual",
    title: _.capitalize(req.body.postTitle),
    content: req.body.postBody,
  });
  await post.save();
  res.redirect("/");
});

//Listening for connection at specific port
app.listen(3000, () => {
  console.log("Server started on port 3000");
});