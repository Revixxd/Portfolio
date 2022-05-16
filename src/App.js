import React from "react";

import data from "./data/data"

import BasicInfo from "./components/BasicInfo"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Hobbies from "./components/Hobbies"
import Footer from "./components/Footer"

import "./styles/app.css"

function App() {
    const importedData = data[0]

  return (

    <div className="container">

      <div className="gridContainer">

      <BasicInfo array = {importedData.basicInfo}/>

      <Skills name = "SKILLS" array = {importedData.skillsTech} />
      <Skills name = "FRONT-END" array = {importedData.skillsFront} />

      <Projects />

      <Hobbies />

    </div>

    <Footer />
      
    </div>

  )
}

export default App;
