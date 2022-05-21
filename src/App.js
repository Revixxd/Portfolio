import React from "react";

import data from "./data/data"

import BasicInfo from "./components/BasicInfo"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Hobbies from "./components/Hobbies"
import Footer from "./components/Footer"

import "./styles/app.css"

import { ThemeProvider } from "styled-components";
import {lightTheme, darkTheme, GlobalStyles} from "./components/darkmode/themes"

function App() {

  const[theme, setTheme] = React.useState("dark")

  function changeTheme(){
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (

    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={changeTheme}>Change Theme</button>
      <div className="container">

        <div className="gridContainer">

        <BasicInfo array = {data.basicInfo}/>

        <Skills name = "SKILLS" array = {data.skillsTech} />
        <Skills name = "FRONT-END" array = {data.skillsFront} />

        <Projects array = {data.projects} />
        {/* <Projects array = {data.projects} /> */}

        <Hobbies array = {data.hobbies} />

      </div>

      <Footer />
        
      </div>

    </ThemeProvider>

  )
}

export default App;
