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

  // const photoBox = document.getElementsByClassName("photo-box");
  

  return (
    <div className="project-layout">
        {projects.filter(project => name === project.link).map(project => (
          <div key={project.id}>
            <h1>{project.name}</h1>
            <h3>{project.skills}</h3>
            <div className="project-desc">{currentProject}</div>

            {project.images.map(image => 
              <img src={require(`../../public/assets/images/${image}`)} alt="" width="500" />
            )}

          </div>          
        ))}
    </div>
  );
};

















      {/* // <div className="photo-box">
      //   {projects.filter(project => name === project.link).map(
      //     project => (
           
      //       // {console.log(project.images)}
      //       // <div key={project.id}>
      //         // {
      //       project.images.forEach(image => 
      //         // {console.log(image)},
      //         // {var img = document.createElement("img");
      //         // img.src = (require("../../public/assets/images/" + `${image}`));
      //         // img.alt = ("");
      //         // this.appendChild(img);
      //         // // img.appendChild(photoBox);
      //         // }
      //         <div key={project.id}>
      //           <img className="proj-image" src={require(`../../public/assets/images/${image}`).default} alt="" />
      //         </div>

      //         // console.log(image)
              
      //           // document.createElement(<img src={"../../public/assets/images/" + `${image}`} alt=""></img>)
      //       )
            
      //     ))
      //   }
      // </div> */}