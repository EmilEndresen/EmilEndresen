import portfolioImg from "../images/headshot.WebP"
import {
  LogoDivStyled,
  LogoStyled,
  ProfileImgSmallScreen,
  ProfileImgDesktop
} from "./StyledComponents"

export default function Pitch() {
  return (
    <section>
      <LogoDivStyled className="logo-area">
        <LogoStyled>
          <h1 className="f-name">Emil</h1>
          <h2 className="l-name">Endresen</h2>
        </LogoStyled>

        <figure>
          <ProfileImgSmallScreen src={portfolioImg} alt="Emil Endresen" />
        </figure>
      </LogoDivStyled>

      <section className="pitch-area">
        <figure className="figure-desktop">
          <ProfileImgDesktop src={portfolioImg} alt="Emil Endresen" />
        </figure>

        <div className="pitch-text">
          <p>
            Jeg går for tiden på Kodehode hvor jeg lærer om HTML, CSS, Javascript og React, og jeg
            er alltid på utkikk etter andre språk og rammeverk jeg kan lære meg.
          </p>
          <p>
            Interessen min for data og koding kom fra ung alder da mye av tiden gikk på data og
            videospill.
          </p>
        </div>
      </section>
    </section>
  )
}
