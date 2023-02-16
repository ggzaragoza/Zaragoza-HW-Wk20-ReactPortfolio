import React, { useState, useEffect } from "react";
// import { useSite } from "../utils/SiteContext";
// import { useNavigate } from "react-router-dom";
import '../App.css';

import Header from "./Header";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

import projects from "../utils/projectlists.js";

export default function Landing() {
  const [newField, setNewField] = useState();
  const field = localStorage.getItem("field");

  useEffect(() => { 
    if (field) {
      setNewField(field);
    } else {
      setNewField("web");
    };
  }, [field]);

  return (
    <div>
      <Header />

      <Projects projects={ 
        projects.filter(project => project.field === newField)
      } />

      <Contact />
      <Footer />
    </div>
  );
}