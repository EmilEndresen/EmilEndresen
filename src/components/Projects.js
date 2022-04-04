import React from "react"
import steakhouse from "./images/steakhouse.WebP"
import travelJournal from "./images/travel-journal.WebP"
import blackjack from "./images/blackjack.WebP"
import { ProjectTextOne, ProjectTextThree, ProjectTextTwo } from "./Projects/ProjectConsts"

export default function Projects() {
  return (
    <section className="project-section">
      <h2>Mine Prosjekter</h2>
      <div className="project">
        <p className="project-description">{ProjectTextOne}</p>

        <a href="https://github.com/EmilEndresen/Restaurant" className="project-image">
          <img src={steakhouse} alt="project" className="project-images" />
        </a>
      </div>
      <div className="project">
        <p className="project-description">
          {ProjectTextTwo}
        </p>
        <a href="https://github.com/EmilEndresen/travel-journal" className="project-image">
          <img src={travelJournal} alt="project" className="project-images" />
        </a>
      </div>
      <div className="project">
        <p className="project-description">
          {ProjectTextThree}
        </p>
        <a href="https://github.com/EmilEndresen/Blackjack" className="project-image">
          <img src={blackjack} alt="project" className="project-images" />
        </a>
      </div>
    </section>
  )
}
