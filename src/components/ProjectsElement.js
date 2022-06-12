import React from "react"

import "../styles/projectElements.css"

function ProjectsElement(props){

    const currentImg = `${props.array.repo}.jpg`
    return(
        <div className="projectElementsDiv elementStyle">

            <div className="projectElementsDiv--imgDiv">

                <img className = "projectElementsDiv--img" alt="projectImg" 
                src={currentImg && require(`../data/images/${currentImg}`)}>
                    
                </img>

            </div>

            <div className="projectElementsDiv--info">
                
                {props.array.language === "HTML" && 
                    <div className="projectElementsDiv__info--hastag">
                        <h6>#HTML</h6>
                        <h6>#CSS</h6>
                        <h6>#WebResponsive</h6>
                    </div>
                }

                {props.array.language === "JavaScript" && 
                    <div className="projectElementsDiv__info--hastag">
                        <h6>#React</h6>
                        <h6>#StyledComponents</h6>
                        <h6>#WebResponsive</h6>
                    </div>
                }


                <div className="projectElementsDiv__info--mainDescription">

                    <div className="projectElementsDiv__info__mainDescription--projectName">
                        <h2>{props.array.repo}</h2>
                    </div>

                    <div className="projectElementsDiv__info__mainDescription--description">
                        <p>{props.array.description} </p>
                    </div>

                </div>

                

                <div className="projectElementsDiv__info--buttonsDiv" >
                    <a className="projectElementsDiv__info__buttonsDiv-aElement" target="_blank" rel="noreferrer" href={props.array.website}>Demo</a>
                    <a className="projectElementsDiv__info__buttonsDiv-aElement" target="_blank" rel="noreferrer" href={props.array.link}>Code</a>
                </div>
            </div>

        </div>
        

    )

}

export default ProjectsElement