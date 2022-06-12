import React from "react";

import SkillsElement from "./SkillsElement"

import "../styles/skills.css"

function Skills(props){

    const elements = props.array.map((item, i) =>{
        return (
            <SkillsElement key ={i} item = {item}/>
        )
    })

    return(
        <div>
            <div className="skillDiv elementStyle">
                <h2>{props.name.toUpperCase()}</h2>
                <div className="skillDiv--skills">
                    {elements}
                </div>
            </div>
        </div>
        
    )

}

export default Skills;