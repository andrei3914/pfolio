import React from "react"
import Tilty from "react-tilty"

const ProjectCard = ({ project }) => {
  return (
    <Tilty>
      <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow5 project-article">
        <div className="tc">
          <a href={project.url} target="_blank" rel="noreferrer">
            <h1 className="f4">{project.title}</h1>
          </a>
          <hr className="mw3 bb bw1 b--black-10" />
        </div>
        <p className="lh-copy measure center f5 black-70">
          {project.description}
        </p>
      </article>
    </Tilty>
  )
}

export default ProjectCard
