import React from "react";
import { animated, useSpring } from "@react-spring/web";
import '../App.css';

function Projects(props) {
    const springs = useSpring(
        {
            from: { opacity: 0 },
            to: { opacity: 1 }
        }
    );

    return (
        <section id="work">
            {props.projects.map(project => (
                <animated.div className="sample" style={ {backgroundImage: `url(${project.background})` , ...springs} }>        
                    <div className="overlay">
                        <div className="project" key={project.id}>
                            <h2>{project.name}</h2>
                            <p>{project.skills}</p>
                            <a href={project.github}><button>GITHUB</button></a>
                            <a href={"/projects/" + project.link}><button>LIVE</button></a>
                        </div>
                    </div>
                </animated.div>
            ))}
        </section>
    );
}

export default Projects;
