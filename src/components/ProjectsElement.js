import React from "react"

import "../styles/projectElements.css"

function ProjectsElement(){

    return(
        <div className="projectElementsDiv">

            <div className="projectElementsDiv-imgDiv">

            <img alt="projectImg" src="https://picsum.photos/200/200"></img>

            </div>
            <div className="projectElementsDiv--info">
                <div className="projectElementsDiv__info--hastag">
                    <p>#Html</p>
                    <p>#CSS</p>
                    <p>#responsive</p>
                </div>
                <div className="projectElementsDiv__info--projectName">
                    <h2>Recipe Blog</h2>
                </div>
                <div className="projectElementsDiv__info--description">
                    <p>In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. </p>
                </div>
                <div className="projectElementsDiv__info--buttons" >
                    <buton>Demo</buton>
                    <buton>Code</buton>
                </div>
            </div>

        </div>
        

    )

}

export default ProjectsElement