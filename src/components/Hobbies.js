import React from "react";

import HobbiesElemet from "./HobbiesElement"

import "../styles/hobbies.css"

function Hobbies(){

    return(
        <div className="hobbiesDiv">
            <h2>Hobbies</h2>
            <HobbiesElemet />
            <HobbiesElemet />
            <HobbiesElemet />
        </div>
    )

}

export default Hobbies