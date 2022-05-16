import React from "react";

import data from "./data/data"

import BasicInfo from "./components/BasicInfo"
import Skills from "./components/Skills"
import Description from "./components/Description"

import "./styles/app.css"

function App() {
    const importedData = data[0]

  return (

    <div className="container">

      <BasicInfo array = {importedData.basicInfo}/>

      <Skills name = "Front-end" array = {importedData.skillsFront}/>
      <Skills name = "Skills" array = {importedData.skillsTech}/>

      

    </div>

  )
}

export default App;
