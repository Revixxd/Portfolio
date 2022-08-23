import React from 'react'

import ProjectsElement from './ProjectsElement'
import Loading from './helper/loadingComponent/Loading'
import '../styles/projects.css'

function Projects() {
    const [pinnedRepos, setPinnedRepos] = React.useState([])
    const [elementIsLoading, setELementIsLoading] = React.useState(false)

    //fetching data from api
    async function fetchPinnedFromProfile() {
        const response = await fetch(
            `https://gh-pinned-repos.egoist.sh/?username=revixxd`
        )
        const data = await response.json()
        //data is imported repos
        setELementIsLoading(true)
        return setPinnedRepos(data)
    }

    // on first load set imported data from api to pinnedRepos
    React.useEffect(() => {
        fetchPinnedFromProfile()
    }, [])

    //filtering repos to not show Portfolio repo and c exercises
    const fillterData = pinnedRepos.filter(function(element) {
        return !(
            element.repo === 'Portfolio' || element.repo === 'C-C--exercises'
        )
    })

    const allPinedProjects = fillterData.map((element, i) => {
        return <ProjectsElement key={i} array={element} />
    })

    return (
        <div className="projectsDiv">
            <div className="projectsDiv--titileDiv elementStyle">
                <h3>Projects ({Object.keys(fillterData).length})</h3>
            </div>
            {elementIsLoading ? (
                <div className="projectsDiv--elements">{allPinedProjects}</div>
            ) : (
                <Loading />
            )}
        </div>
    )
}

export default Projects
