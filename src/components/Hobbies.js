import React from "react";

import HobbiesElement from "./HobbiesElement"

import "../styles/hobbies.css"

function Hobbies(props){



    return(
        <div className="hobbiesDiv elementStyle">
            <h2>Hobbies</h2>
            <HobbiesElement array = {props.array.programing} />
            <HobbiesElement array = {props.array.formulaOne} />
        </div>
    )

}

export default Hobbies