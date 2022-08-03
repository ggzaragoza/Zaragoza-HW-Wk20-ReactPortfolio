import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/web" element={<About />} />
        </Routes>
      </Router>
      {/* <Header /> */}
      {/* <About /> */}
      {/* <Projects projects={projects} />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
