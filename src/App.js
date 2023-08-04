import React from "react";
import "./App.css";

import Main from "./components/Main";
import About from "./components/About";
import BestBook from "./components/BestBook";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/About" element={<About />} />
          <Route path="/BestBook" element={<BestBook />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
