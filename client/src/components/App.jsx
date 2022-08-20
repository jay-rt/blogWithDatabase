import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import BlogPost from "../pages/BlogPost";
import Compose from "../pages/Compose";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Footer from "./Footer";
import NavBar from "./NavBar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/compose" element={<Compose />}></Route>
            <Route path="/posts/:id" element={<BlogPost />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
