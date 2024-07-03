import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { animated, useSpring } from "@react-spring/web";
import '../App.css';

import Header from "./Header";
import Gallery from "./Gallery";
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

      <animated.div style={ {...springs} }>
        <div className="hero"></div>
        <div className="project-layout">
          <div>
            {projects.filter(project => name === project.link).map(project => (
              <div key={project.id} className="project-info">
                <div>
                  <h4>{project.skills}</h4>
                  <h1>{project.name}</h1>
                  <hr></hr>
                  <p className="project-desc">{currentProject}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="photo-box">
            {/* {projects.filter(project => name === project.link).map(project => (
              <div key={project.id}>
                {project.images.map(image =>
                  <SlideshowLightbox theme="day">
                    <img className="proj-image" src={require(`../../public/assets/images/${image}`)} alt="" width="100%" />
                  </SlideshowLightbox>
                )}
              </div>
            ))} */}
            <Gallery name={name}/>
          </div>
        </div>
      </animated.div>

      <div><Footer /></div>
    </div>
  );
};