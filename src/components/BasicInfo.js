import React, { Component } from "react";
import ReactDOM from 'react-dom/client'



import "../styles/basicInfo.css"

function BasicInfo(props){


    return(
        <div className="BasicInfoDiv">
            <div className="BasicInfoDiv--ImageDiv">
                <img alt = "photo" src="https://picsum.photos/300/300" />
            </div>
            <div className="BasicInfoDiv--bottomInfo">

                <div>
                    <h2>{props.array.name}</h2>
                    <h3>Front-end Developer</h3>
                </div>
                
                <div>
                    <h4>{props.array.email}</h4>
                    <h4>{props.array.phoneNumber}</h4>
                </div>
                <div>   
                    <h5>{props.array.desciption}</h5>
                </div>

                
            </div>

        </div>
        
    )
}

export default BasicInfo;