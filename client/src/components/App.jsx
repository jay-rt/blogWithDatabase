import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
