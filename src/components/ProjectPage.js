import React from "react";
import { useParams } from "react-router";
import '../App.css';

import Sample from '../projects/sample.mdx';

export default function ProjectPage({ projects }) {
  const { name } = useParams();

  return (
    <div>
      {projects.filter(project => name === project.link).map(project => (
        <div key={project.id}>
          <h1>THIS IS THE PROJECT PAGE</h1>
          <h1>{project.name}</h1>
          <h3>{project.skills}</h3>
          <p>{project.description}</p>

          <div><Sample /></div>

        </div>))
      }

    </div>
  );
};