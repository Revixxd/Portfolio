import React from "react";

import "../styles/hobbiesElement.css"

function HobbiesElement(){
    return(
        <div className="hobbiesElement">
            <img alt = "photo" src="https://picsum.photos/350/100" />

            <div className="hobbiesElement--infoDiv">

            <h3>Gaming</h3>
            <p>Quisque feugiat malesuada molestie.</p>

            </div>
        </div>
    )
}

export default HobbiesElement