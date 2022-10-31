import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import '../App.css';

export default function ProjectPage({ projects }) {
  const { name } = useParams();

  const [currentProject, setCurrentProject] = useState();

  useEffect(() => {
    import(`../projects/${name}.mdx`).then(module => {
      setCurrentProject(module.default)
    })
  }, [name]);

  return (
    <div className="project-layout">
      <div className="project-info">
        {projects.filter(project => name === project.link).map(project => (
          <div key={project.id}>
            {/* <h1>THIS IS THE PROJECT PAGE</h1> */}
            <h1>{project.name}</h1>
            <h3>{project.skills}</h3>
            {/* <p>{project.description}</p> */}

            {/* <div><Sample /></div> */}
            {/* <div className="project-desc"><Sample /></div> */}
            <div className="project-desc">{currentProject}</div>

          </div>))
        }
      </div>

      <div className="photo-box">
      </div>

    </div>
    
  );
};