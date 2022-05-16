import React from "react";

import ProjectsElement from "./ProjectsElement";

import "../styles/projects.css"

function Projects(){
    return(
        <div className="projectsDiv">
            <div className = "projectsDiv--titileDiv">
                {/* adding array.lenght */}
                <h3>Projects (3)</h3>    
            </div>
            <div className = "projectsDiv--elements">
                <ProjectsElement />
                <ProjectsElement />
                <ProjectsElement />
            </div>
            
        </div>
        
    )
}

export default Projects