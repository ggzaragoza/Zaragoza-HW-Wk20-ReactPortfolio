import React from "react";
import '../App.css';

function Projects(props) {
  return (
    <section id="work">
        {props.projects.map(project => (
            <div className="sample" style={ {backgroundImage: `url(${project.background})` } }>        
                <div className="overlay">
                    <div className="project">
                        <h2>{project.name}</h2>
                        <p>{project.skills}</p>
                        <a href={project.github} target="_blank" rel="noreferrer"><button>GITHUB</button></a>
                        <a href={project.live} target="_blank" rel="noreferrer"><button>LIVE</button></a>
                    </div>
                </div>
            </div>
        ))}
    </section>
  );
}

export default Projects;
