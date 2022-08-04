import React from "react";
import { useSite } from "../utils/SiteContext";
import '../App.css';
// import headshot from "../assets/images/greg4.jpg";

import Header from "./Header";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

import { designProjects, webProjects } from "../utils/projectlists.js";

function About() {
  const { field } = useSite();

  return (
    <div>
      <Header />

      <div>
        <section id="about">
          <div id="bio">
            {field === "design" ?
              <h1>Greg Zaragoza is a <span className="bioBold">graphic designer</span> from and based in San Antonio, Texas.</h1> :
              <h1>Greg Zaragoza is a <span className="bioBold">web developer</span> from and based in San Antonio, Texas.</h1>
            }  
          </div>

          <div id="headshot"></div>
        </section>
      </div>
      
      {field==="design" ? <Projects projects={designProjects}/> : <Projects projects={webProjects}/>}

      <Contact />
      <Footer />
    </div>
  );
}

export default About;
