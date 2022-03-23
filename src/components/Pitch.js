import React from "react"
import placeholder from "../images/aboutme-image-placeholder.png"

export default function Pitch() {
  return (
    <div className="pitch-area">
      <img src={placeholder} alt="Silhuette of man" className="profile-img" />

      <div className="pitch-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium est scelerisque in lectus
          ut eget.
        </p>
        <p>Vitae integer dui enim nisl sit ornare. Pretium id in sit amet, nam.</p>
        <p>Tincidunt molestie sed ipsum non arcu pellentesque mauris faucibus mauris.</p>
      </div>
    </div>
  )
}
