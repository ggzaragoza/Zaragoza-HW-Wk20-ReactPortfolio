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
    skills: "Blah blah"
  },
  {
    id: 2,
    name: "CodeFront",
    skills: "Sum sum"
  },
  {
    id: 3,
    name: "The Quiz Template",
    skills: "Got skillz brah"
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
