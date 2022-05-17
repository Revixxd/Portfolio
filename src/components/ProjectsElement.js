import React from "react"

import ProjectsElementHash from "./ProjectElementHash"

import "../styles/projectElements.css"

function ProjectsElement(props){

    return(
        <div className="projectElementsDiv">

            <div className="projectElementsDiv-imgDiv">

                <img alt="projectImg" src="https://picsum.photos/200/200"></img>

            </div>
            <div className="projectElementsDiv--info">

                <div className="projectElementsDiv__info--hastag">
                    <h6>#HTML</h6>
                    <h6>#CSS</h6>
                    <h6>#JavaScript</h6>
                </div>


                <div className="projectElementsDiv__info--mainDescription">

                    <div className="projectElementsDiv__info__mainDescription--projectName">
                        <h2>{props.array.projectName}</h2>
                    </div>

                    <div className="projectElementsDiv__info__mainDescription--description">
                        <p>{props.array.description} </p>
                    </div>

                </div>

                

                <div className="projectElementsDiv__info--buttonsDiv" >
                    <a className="projectElementsDiv__info__buttonsDiv-aElement" target="_blank" href={props.array.demoSource}>Demo</a>
                    <a className="projectElementsDiv__info__buttonsDiv-aElement" target="_blank" href={props.array.repoSource}>Code</a>
                </div>
            </div>

        </div>
        

    )

}

export default ProjectsElement