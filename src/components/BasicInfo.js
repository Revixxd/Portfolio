import React from "react";
import { GrMail } from 'react-icons/gr';
import { BsFillTelephoneFill } from 'react-icons/bs';




import "../styles/basicInfo.css"

function BasicInfo(props){

    return(
        <div className="BasicInfoDiv elementStyle">
            <div className="BasicInfoDiv--ImageDiv">
                <img alt = "photo" src={props.array.avatar_url} />
            </div>
            <div className="BasicInfoDiv--bottomInfo">

                <div className="BasicInfoDiv__bottomInfo--name" >
                    <h1>{props.array.name}</h1>
                    <h4>Future frontend developer 😎🤓</h4>
                </div>
                
                <div className="BasicInfoDiv__bottomInfo--contact" >
                    <div className="BasicInfoDiv__bottomInfo__contact--element">
                        <GrMail />
                        <h5>{props.array.email}</h5>
                    </div>
                    <div className="BasicInfoDiv__bottomInfo__contact--element">
                        <BsFillTelephoneFill />
                        <h5>668 244 841</h5>
                    </div>
                    {/* <div className="BasicInfoDiv__bottomInfo__contact--element">
                        <BsFillTelephoneFill />
                        <h5>LOCATION</h5>
                    </div>
                    <div className="BasicInfoDiv__bottomInfo__contact--element">
                        <BsFillTelephoneFill />
                        <h5>LINKEDIN</h5>
                    </div> */}

                </div>
                <div className="BasicInfoDiv__bottomInfo--description">   
                    <p>I am a first-year student of the Wrocław University of Technology. Currently, I am developing my skills, creating new website projects, knowledge of C ++ and React. I am characterized by skills such as teamwork, attention to detail and punctuality.</p>
                </div>

                
            </div>

        </div>
        
    )
}

export default BasicInfo;