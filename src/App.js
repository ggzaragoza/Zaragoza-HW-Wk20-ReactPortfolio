import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import './App.css';

import Landing from "./components/Landing";
import About from "./components/About";
import ProjectPage from "./components/ProjectPage";
import Contact from "./components/Contact";

import projects from "./utils/projectlists.js";
import SiteProvider from "./utils/SiteContext";

function App() {
  // const { project } = useParams();
  // const title = project;

  return (
    <div className="App">
      <SiteProvider>
        <Router>
          <Routes>
            <Route element={<Landing />} exact path="/" />
            {/* <Route element={<About field="design" />} exact path="/design" />
            <Route element={<About field="web"/>} exact path="/web" /> */}
            <Route element={<About />} exact path="/design" />
            <Route element={<About />} exact path="/web" />
            <Route element={<ProjectPage projects={projects} />} path={"/projects/:name"}/>
            <Route element={<Contact />} path={"/:field/#contact"}/>
          </Routes>
        </Router>
      </SiteProvider>
      {/* <Header /> */}
      {/* <About /> */}
      {/* <Projects projects={projects} />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
