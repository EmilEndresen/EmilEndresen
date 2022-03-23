import portfolioImg from "../images/portfolio-img"
import { LogoDivStyled, ProfileImgStyled } from "./StyledComponents"

export default function Pitch() {
  return (
    <div>
      <LogoDivStyled className="logo-area">
        <div className="logo">
          <h1 className="f-name">Emil</h1>
          <h2 className="l-name">Endresen</h2>
        </div>
        <div>
          <ProfileImgStyled src={portfolioImg} alt="Emil Endresen" />
        </div>
      </LogoDivStyled>

      <div className="pitch-text">
        <p>
          Jeg går for tiden på Kodehode hvor jeg lærer om HTML, CSS, Javascript og React, og jeg er
          alltid på utkikk etter andre språk og rammeverk jeg kan lære meg.
        </p>
        <p>
          Interessen min for data og koding kom fra ung alder da mye av tiden gikk på data og
          videospill.
        </p>
        <p>Tincidunt molestie sed ipsum non arcu pellentesque mauris faucibus mauris.</p>
      </div>
    </div>
  )
}
