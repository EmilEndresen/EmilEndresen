import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"

export default function Contact() {
  return (
    <div className="contact-area">
      <p className="contact-info contact-email">
        <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
        Emil.Endresen@gmail.com
      </p>
      <p className="contact-info contact-phone">
        <FontAwesomeIcon icon={faPhoneSquareAlt} className="info-icon" />
        +47 45205250
      </p>
      <a href="https://github.com/EmilEndresen" className="contact-info github">
        <FontAwesomeIcon icon={faGithubSquare} className="info-icon" />
        GitHub
      </a>
    </div>
  )
}
