import React from "react";
import { FaHeart } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { BsFillTelephoneFill } from 'react-icons/bs';




import "../styles/basicInfo.css"

function BasicInfo(props){


    return(
        <div className="BasicInfoDiv">
            <div className="BasicInfoDiv--ImageDiv">
                <img alt = "photo" src="https://picsum.photos/400/400" />
            </div>
            <div className="BasicInfoDiv--bottomInfo">

                <div className="BasicInfoDiv__bottomInfo--name" >
                    <h1>{props.array.name}</h1>
                    <h4>Front-end Developer</h4>
                </div>
                
                <div className="BasicInfoDiv__bottomInfo--contact" >
                    <div className="BasicInfoDiv__bottomInfo__contact--element">
                        <GrMail />
                        <h5>{props.array.email}</h5>
                    </div>
                    <div className="BasicInfoDiv__bottomInfo__contact--element">
                        <BsFillTelephoneFill />
                        <h5>{props.array.phoneNumber}</h5>
                    </div>

                </div>
                <div className="BasicInfoDiv__bottomInfo--description">   
                    <p>{props.array.desciption}</p>
                </div>

                
            </div>

        </div>
        
    )
}

export default BasicInfo;