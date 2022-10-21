import React from "react";
import { useParams } from "react-router";
import '../App.css';

// import projects from "../utils/projectlists.js";


export default function ProjectPage({ projects }) {
  const { name } = useParams();
  console.log(name);

  return (
    <div>
      {projects.filter(project => name === project.link).map(project => (
        <div key={project.id}>
          <h1>THIS IS THE PROJECT PAGE</h1>
          <h1>{project.name}</h1>
        </div>
      ))
      }
    </div>
  );
};