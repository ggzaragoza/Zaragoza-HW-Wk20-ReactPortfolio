import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
// import logo from './logo.svg';
import './App.css';

const projects = [
  {
    id: 1,
    name: "Rodemap",
    skills: "Google Maps API",
    github: "https://github.com/Baiterade/ConcertMaps",
    live: "https://baiterade.github.io/ConcertMaps/",
    background: process.env.PUBLIC_URL + "/assets/images/rodemap.png"
  },
  {
    id: 2,
    name: "CodeFront",
    skills: "Server-Side API, JSON",
    github: "https://github.com/ggzaragoza/Zaragoza-HW-Wk6-WeatherDashboard",
    live: "https://ggzaragoza.github.io/Zaragoza-HW-Wk6-WeatherDashboard/",
    background: process.env.PUBLIC_URL + "/assets/images/codefront.jpg"
  },
  {
    id: 3,
    name: "The Quiz Template",
    skills: "JavaScript, DOM API",
    github: "https://github.com/ggzaragoza/Zaragoza-HW-Wk4-CodeQuiz",
    live: "https://ggzaragoza.github.io/Zaragoza-HW-Wk4-CodeQuiz/",
    background: process.env.PUBLIC_URL + "/assets/images/codequiz.png"
  }
];

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects projects={projects} />
      <Footer />
    </div>
  );
}

export default App;
