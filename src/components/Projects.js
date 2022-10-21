import React, { useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../App.css';

import ProjectPage from "./ProjectPage";

function Projects(props) {
//   const navigate = useNavigate();

//   useEffect(() => {
//     navigate("/project/" + `${props.project.link}`);
//   }, [props.project.link])

  return (
    <section id="work">
        {props.projects.map(project => (
            <div className="sample" style={ {backgroundImage: `url(${project.background})` } }>        
                <div className="overlay">
                    <div className="project" key={project.id}>
                        <h2>{project.name}</h2>
                        <p>{project.skills}</p>
                            {/* <Router>
                                <Route element={<ProjectPage />} exact path={"/project/" + `${project.link}`}/>
                            </Router> */}
                        <a href={project.github} target="_blank" rel="noreferrer"><button>GITHUB</button></a>
                        <a href={"/projects/" + project.link} target="_blank" rel="noreferrer"><button>LIVE</button></a>
                        {/* <a href={project.live} target="_blank" rel="noreferrer"><button>LIVE</button></a> */}
                    </div>
                </div>
            </div>
        ))}
    </section>
  );
}

export default Projects;
