import React from "react";

import data from "./data/data"

import BasicInfo from "./components/BasicInfo"
import Skills from "./components/Skills"
import Projects from "./components/Projects"

import "./styles/app.css"

function App() {
    const importedData = data[0]

  return (

    <div className="container">

      <BasicInfo array = {importedData.basicInfo}/>

      <Skills name = "Front-end" array = {importedData.skillsFront} />
      <Skills name = "Skills" array = {importedData.skillsTech} />

      <Projects />

    </div>

  )
}

export default App;
