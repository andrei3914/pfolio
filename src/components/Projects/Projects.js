import React from "react"
import "./Projects.css"
import { webProjects } from "./webProjects"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  return (
    <div className="disp">
      {webProjects.map(
        project =>
          project && <ProjectCard key={project.url} project={project} />
      )}
    </div>
  )
}

export default Projects
