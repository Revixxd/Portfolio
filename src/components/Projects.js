import React from "react";

import ProjectsElement from "./ProjectsElement";

import "../styles/projects.css"

function Projects(props){



    return(
        <div className="projectsDiv">
            <div className = "projectsDiv--titileDiv">
                {/* adding array.lenght */}
                <h3>Projects ({Object.keys(props.array).length})</h3>    
            </div>
            <div className = "projectsDiv--elements">
                <ProjectsElement key = {props.array.edieHomePage.id} array={props.array.edieHomePage}/>
                <ProjectsElement key = {props.array.interiorConsultant.id} array={props.array.interiorConsultant}/>
                <ProjectsElement key = {props.array.toDoList.id} array={props.array.toDoList} />
            </div>
            
        </div>
        
    )
}

export default Projects