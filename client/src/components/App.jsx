import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import BlogPost from "../pages/BlogPost";
import CreatePost from "../pages/CreatePost";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";
import EditPost from "../pages/EditPost";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/create" element={<CreatePost />}></Route>
            <Route path="/posts/:id" element={<BlogPost />}></Route>
            <Route path="/edit/:id" element={<EditPost />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
