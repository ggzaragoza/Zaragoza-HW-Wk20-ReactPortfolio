import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { animated, useSpring } from "@react-spring/web";
import '../App.css';

import Header from "./Header";
// import Gallery from "./Gallery";
import Footer from "./Footer";

export default function ProjectPage({ projects }) {
  const { name } = useParams();

  const [currentProject, setCurrentProject] = useState();

  useEffect(() => {
    import(`../projects/${name}.mdx`).then(module => {
      setCurrentProject(module.default)
    })
  }, [name]);

  const springs = useSpring(
    {
        from: { opacity: 0 },
        to: { opacity: 1 }
    }
  );

  return (
    <div>
      <div><Header /></div>
      
      <div className="project-layout">

        <div>
          {projects.filter(project => name === project.link).map(project => (
            <div key={project.id} className="project-info">
              <div>
                <h1>{project.name}</h1>
                <h2>{project.skills}</h2>
                <a href={project.github}><button>GITHUB</button></a>
                <a href={project.live}><button>LIVE</button></a>
              </div>
              <div className="project-desc">{currentProject}</div>
            </div>
          ))}
        </div>

        <animated.div className="photo-box" style={ {...springs} }>
          {projects.filter(project => name === project.link).map(project => (
            <div key={project.id}>
              {project.images.map(image => 
                <img className="proj-image" src={require(`../../public/assets/images/${image}`)} alt="" width="100%" />
              )}
            </div>
          ))}
        </animated.div>

      </div>

      {/* <div><Gallery project={ projects }/></div> */}

      <div><Footer /></div>
    </div>
  );
};