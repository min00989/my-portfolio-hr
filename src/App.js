import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import "./App.css";
import Skils from "./skils/Skils";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/skills" element={<Skils />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
          {/* 추가적인 Route 설정을 여기에 넣을 수 있습니다 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
