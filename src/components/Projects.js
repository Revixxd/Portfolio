import React from "react";

import ProjectsElement from "./ProjectsElement";

import "../styles/projects.css"

function Projects(props){

    const allPinedProjects = props.array.map((element, i) =>{
        if(element.repo === "C-C--exercises" || element.repo ==="Portfolio"){
            return
        }
        
        return(
            <ProjectsElement key={i} array={element}/>
        )
    })


    return(
        <div className="projectsDiv">
            
            <div className = "projectsDiv--titileDiv elementStyle">
                {/* adding array.lenght */}
                <h3>Projects ({Object.keys(props.array).length})</h3>    
            </div>

            <div className = "projectsDiv--elements">
                {allPinedProjects}
            </div>
            
        </div>
    )
}

export default Projects