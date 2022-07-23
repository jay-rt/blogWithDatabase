const express = require("express");
const mongoose = require("mongoose");
const _ = require("lodash");
const ejs = require("ejs");
const Post = require("./posts");

const mainHomeContent = new Post({
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
app.get("/", (req, res) => {
  (async () => {
    const home = await Post.find({ landingPage: "home" });
    if (home.length === 0) {
      await mainHomeContent.save();
      res.redirect("/");
    } else {
      const posts = await Post.find({ landingPage: "homeAndPost" });
      res.render("home", {
        homeContent: mainHomeContent,
        postedContent: posts,
      });
    }
  })();
});

app.get("/about", (req, res) => {
  (async () => {
    const about = await Post.find({ landingPage: "about" });
    if (about.length === 0) {
      await aboutContent.save();
      res.redirect("/about");
    } else {
      res.render("about", { aboutContent: aboutContent });
    }
  })();
});

app.get("/contact", (req, res) => {
  (async () => {
    const contact = await Post.find({ landingPage: "contact" });
    if (contact.length === 0) {
      await contactContent.save();
      res.redirect("/contact");
    } else {
      res.render("contact", { contactContent: contactContent });
    }
  })();
});

app.get("/compose", (req, res) => {
  res.render("compose");
});

app.get("/posts/:post", (req, res) => {
  const requestedTitle = _.lowerCase(req.params.post);
  posts.forEach((post) => {
    const storedTitle = _.lowerCase(post.title);
    if (requestedTitle === storedTitle) {
      res.render("post", {
        title: post.title,
        content: post.content,
      });
    }
  });
});

//POST Request
app.post("/compose", (req, res) => {
  (async () => {
    const post = new Post({
      landingPage: "homeAndPost",
      title: _.capitalize(req.body.postTitle),
      content: req.body.postBody,
    });
    await post.save();
    res.redirect("/");
  })();
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
