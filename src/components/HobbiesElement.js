import React from "react";

import "../styles/hobbiesElement.css"

function HobbiesElement(props){

    return(
        <div className="hobbiesElement">
            <div className="hobbiesElement-imgDiv" >
                <img alt = "photo" src={props.array.imgSource} />
            </div>
            

            <div className="hobbiesElement--infoDiv ">

            <h3>{props.array.name}</h3>
            {/* <p>{props.array.desciption}</p> */}

            </div>
        </div>
    )
}

export default HobbiesElement