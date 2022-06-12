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

  const [githubData, setGithubData] = React.useState([])
    async function fetchGithubData(){
      const response = await fetch(`https://api.github.com/users/revixxd`);
      const data = await response.json();
      return setGithubData(data);
  }
  const [pinnedRepos, setPinnedRepos] = React.useState([])
    async function fetchPinnedFromProfile(){
      const response = await fetch(`https://gh-pinned-repos.egoist.sh/?username=revixxd`);
      const data = await response.json();
      return setPinnedRepos(data);
  }

  React.useEffect(() => {
    fetchGithubData()
    fetchPinnedFromProfile()
  }, [])

  console.log(githubData)
  console.log(pinnedRepos)
  return (

    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="accessibilityDiv">

        <button onClick={changeTheme}>Theme</button>
        {/* <button >Language</button> */}
        {/* <br></br>
        <button><AiOutlineArrowDown /></button> */}

      </div>
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
