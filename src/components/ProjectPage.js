import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { animated, useSpring } from "@react-spring/web";
import '../App.css';

import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'

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

  useEffect(() => {
    initLightboxJS("905B-1304-0587-0F88", "individual")
  });

  const springs = useSpring(
    {
        from: { opacity: 0 },
        to: { opacity: 1 }
    }
  );

  return (
    <div>
      <div><Header /></div>

      <div className="hero"></div>
      
      <div className="project-layout">
        <div>
          {projects.filter(project => name === project.link).map(project => (
            <div key={project.id} className="project-info">
              <div>
                <h4>{project.skills}</h4>
                <h1>{project.name}</h1>
                <p className="project-desc">{currentProject}</p>
              </div>
            </div>
          ))}
        </div>

        <animated.div className="photo-box" style={ {...springs} }>
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
        </animated.div>

      </div>

      <div><Footer /></div>
    </div>
  );
};