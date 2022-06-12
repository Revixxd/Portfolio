import React from "react";

import ProjectsElement from "./ProjectsElement";

import "../styles/projects.css"

function Projects(){

    const [pinnedRepos, setPinnedRepos] = React.useState([])
    async function fetchPinnedFromProfile(){
        const response = await fetch(`https://gh-pinned-repos.egoist.sh/?username=revixxd`);
        const data = await response.json();
        return setPinnedRepos(data);
    }

    React.useEffect(() => {
        fetchPinnedFromProfile()
    }, [])


    const fillterData = pinnedRepos.filter(function(element){
        return !(element.repo == "Portfolio" || element.repo == "C-C--exercises")
    })

    const allPinedProjects = fillterData.map((element, i) =>{
        return(
            <ProjectsElement key={i} array={element}/>
        )
    })


    return(
        <div className="projectsDiv">
            
            <div className = "projectsDiv--titileDiv elementStyle">
                <h3>Projects ({Object.keys(fillterData).length})</h3>    
            </div>

            <div className = "projectsDiv--elements">
                {allPinedProjects}
            </div>
            
        </div>
    )
}

export default Projects