import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

import Main from "./components/Main"
import About from "./components/About";
import BestBook from "./components/BestBook";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route, Router} from "react-router-dom"


const routing = (
  <Router>
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={Main} />
          <Route path="/About Us" component={About} />
          <Route path="/BestBook" component={BestBook} />
        </Routes>
        </BrowserRouter>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));