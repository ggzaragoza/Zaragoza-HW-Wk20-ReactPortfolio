import React from "react";
import { useSite } from "../utils/SiteContext";
import { useLocation } from "react-router-dom";
import '../App.css';
// import headshot from "../assets/images/greg4.jpg";

import Header from "./Header";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

import { designProjects, webProjects } from "../utils/projectlists.js";

function About({ field }) {
  const location = useLocation();
  
  // const { field } = useSite();

  return (
    <div>
      <Header />

      <div>
        <section id="about">
          <div id="bio">
            {/* {location.pathname === "/web" ? */}
            {field === "web" ?
              <h1>Greg Zaragoza is a <span className="bioBold">web developer</span> from and based in San Antonio, Texas.</h1> :
              <h1>Greg Zaragoza is a <span className="bioBold">graphic designer</span> from and based in San Antonio, Texas.</h1>
            }

            {/* {field === "web" ?
              <h1>Greg Zaragoza is a <span className="bioBold">web developer</span> from and based in San Antonio, Texas.</h1> :
              <h1>Greg Zaragoza is a <span className="bioBold">graphic designer</span> from and based in San Antonio, Texas.</h1>
            } */}
          </div>

          <div id="headshot"></div>
        </section>
      </div>
      
      {/* {location.pathname === "web" ? <Projects projects={webProjects}/> : <Projects projects={designProjects}/>} */}
      {field === "web" ? <Projects projects={webProjects}/> : <Projects projects={designProjects}/>}

      <Contact />
      <Footer />
    </div>
  );
}

export default About;
