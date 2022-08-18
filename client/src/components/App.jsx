import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ComposePage from "../pages/ComposePage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  const handleAdd = (blog) => {
    setBlogs((prevValue) => {
      return [...prevValue, blog];
    });
  };

  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage blogs={blogs} />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route
              path="/compose"
              element={<ComposePage onAdd={handleAdd} />}
            ></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
