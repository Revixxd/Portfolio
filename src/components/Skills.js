import React from "react";
import ReactDOM from 'react-dom/client'

import SkillsElement from "./SkillsElement"

import "../styles/skills.css"

function Skills(props){

    const elements = props.array.map(item =>{
        return (
            <SkillsElement item = {item}/>
        )
    })

    return(
        <div>
            <div className="skillDiv">
                <h3>{props.name}</h3>
                <div className="skillDiv--skills">
                    {elements}
                </div>
            </div>
        </div>
        
    )

}

export default Skills;