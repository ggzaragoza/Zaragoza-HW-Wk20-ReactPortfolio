import React from "react";
import '../App.css';

function Projects(props) {
  return (
    <section id="work">
        {props.projects.map(project => (
            <div className="sample" id="sample1">        
                <div className="overlay">
                    <div className="project">
                        <h2>{project.name}</h2>
                        <p>{project.skills}</p>
                        <a href="https://github.com/Baiterade/ConcertMaps"><button>GITHUB</button></a>
                        <a href="https://baiterade.github.io/ConcertMaps/"><button>LIVE</button></a>
                    </div>
                </div>
            </div>
        ))}
    </section>
  );
}

export default Projects;
