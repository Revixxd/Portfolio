import React from "react";

//import data.js for infos 
import data from "./data/data"
//Components import
import BasicInfo from "./components/BasicInfo"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Hobbies from "./components/Hobbies"
import Footer from "./components/Footer"

import "./styles/app.css"

//styles for darkMode
import { ThemeProvider } from "styled-components";
import {lightTheme, darkTheme, GlobalStyles} from "./components/darkmode/themes"


function App() {

  //darkMode functions 
  const[theme, setTheme] = React.useState("light")

  function changeTheme(){
    theme === "light" ? setTheme("dark") : setTheme("light")
  }



  return (

    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="accessibilityDiv">

        <button onClick={changeTheme}>Theme</button>
        {/* <button >Language</button> */}
        {/* <br></br>
        <button> test/></button> */}

      </div>
      <div className="container">
      
        <div className="gridContainer">

        <BasicInfo/>

        <Skills name = "SKILLS" array = {data.skillsTech} />
        <Skills name = "FRONT-END" array = {data.skillsFront} />

        <Projects />

        <Hobbies array = {data.hobbies} />

      </div>

      <Footer />
        
      </div>

    </ThemeProvider>

  )
}

export default App;
