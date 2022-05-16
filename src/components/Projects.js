import React from "react";

import ProjectsElement from "./ProjectsElement";

import "../styles/projects.css"

function Projects(){
    return(
        <div className="projectsDiv">
            <div className = "projectsDiv--titileDiv">
                <h3>Projects (3)</h3>    
            </div>
            <ProjectsElement />
            <ProjectsElement />
            <ProjectsElement />
        </div>
        
    )
}

export default Projects