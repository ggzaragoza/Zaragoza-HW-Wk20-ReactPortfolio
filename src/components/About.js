import React from "react";
import '../App.css';
// import headshot from "../assets/images/greg4.jpg";

import Header from "./Header";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

import projects from "../utils/projectlists.js";

function About() {
  return (
    <div>
      <Header />

      <div>
          <section id="about">
              <div id="bio">
                  <h1>Greg Zaragoza is a <span className="bioBold">web developer</span> from and based in San Antonio, Texas.</h1>
              </div>

              <div id="headshot"></div>
          </section>
      </div>

      <Projects projects={projects}/>
      <Contact />
      <Footer />
    </div>
  );
}

export default About;
