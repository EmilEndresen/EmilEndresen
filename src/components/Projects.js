import React from "react"
import steakhouse from "../images/steakhouse.png"

export default function Projects() {
  return (
    <div className="projects">
      <h2>Mine Prosjekter</h2>
      <div className="project">
        <p className="project-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam. Lorem ipsum dolor sit
          amet.
        </p>
        <a href="https://github.com/EmilEndresen/Restaurant" className="project-image">
          <img src={steakhouse} alt="project" className="project-images" />
        </a>
      </div>
      <div className="project">
        <p className="project-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam. Lorem ipsum dolor sit
          amet.
        </p>
        <a href="https://github.com/EmilEndresen/Restaurant" className="project-image">
          <img src={steakhouse} alt="project" className="project-images" />
        </a>
      </div>
      <div className="project">
        <p className="project-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam. Lorem ipsum dolor sit
          amet.
        </p>
        <a href="https://github.com/EmilEndresen/Restaurant" className="project-image">
          <img src={steakhouse} alt="project" className="project-images" />
        </a>
      </div>
    </div>
  )
}
