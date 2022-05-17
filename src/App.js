import React from "react";

import data from "./data/data"

import BasicInfo from "./components/BasicInfo"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Hobbies from "./components/Hobbies"
import Footer from "./components/Footer"

import "./styles/app.css"

function App() {


  return (

    <div className="container">

      <div className="gridContainer">

      <BasicInfo array = {data.basicInfo}/>

      <Skills name = "SKILLS" array = {data.skillsTech} />
      <Skills name = "FRONT-END" array = {data.skillsFront} />

      <Projects array = {data.projects} />

      <Hobbies array = {data.hobbies} />

    </div>

    <Footer />
      
    </div>

  )
}

export default App;
