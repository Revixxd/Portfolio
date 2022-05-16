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
                    <h6>#Html</h6>
                    <h6>#CSS</h6>
                    <h6>#responsive</h6>
                </div>


                <div className="projectElementsDiv__info--mainDescription">

                    <div className="projectElementsDiv__info__mainDescription--projectName">
                        <h2>Recipe Blog</h2>
                    </div>

                    <div className="projectElementsDiv__info__mainDescription--description">
                        <p>In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. </p>
                    </div>

                </div>

                

                <div className="projectElementsDiv__info--buttonsDiv" >
                    <button>Demo</button>
                    <button>Code</button>
                </div>
            </div>

        </div>
        

    )

}

export default ProjectsElement