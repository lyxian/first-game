import React, { Component } from "react";
import "./App.css";
// import "./components/games/LoveLetter.css";

import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";

import Button from "./components/Button";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import LoveLetter from "./components/games/LoveLetter";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <h1>This is Heading 1.</h1>
          <Button />
          <p>I am a paragraph.</p>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/love-letter" element={<LoveLetter />} />
          </Routes>
          {/* <Header /> */}
          {/* <Body /> */}
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
