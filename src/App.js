import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";

import Header from "./components/Header";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import logo from './logo.svg';
import './App.css';
import SiteProvider from "./utils/SiteContext";
import ProjectPage from "./components/ProjectPage";

function App() {
  let { project } = useParams();
  
  return (
    <div className="App">
      {/* <SiteProvider> */}
        <Router>
          <Routes>
            <Route element={<Landing />} exact path="/" />
            <Route element={<About field="design" />} exact path="/design" />
            <Route element={<About field="web"/>} exact path="/web" />
            <Route element={<ProjectPage />} path={"/projects/:" + project} />
          </Routes>
        </Router>
        {/* <Landing /> */}
      {/* </SiteProvider> */}
      {/* <Header /> */}
      {/* <About /> */}
      {/* <Projects projects={projects} />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
