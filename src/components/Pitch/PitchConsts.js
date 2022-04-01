import { LogoStyled, ProfileImgSmallScreen, ProfileImgDesktop } from "../StyledComponents"
import portfolioImg from "../images/headshot.WebP"

export const PitchTextFirst = `
            Jeg går for tiden på Kodehode hvor jeg lærer om HTML, CSS, Javascript og React, og jeg
            er alltid på utkikk etter andre språk og rammeverk jeg kan lære meg.`

export const PitchTextSecond = `
            Interessen min for data og koding kom fra ung alder da mye av tiden gikk på data og
            videospill.
`

export const Logo = () => {
  return (
    <LogoStyled>
      <h1 className="f-name">Emil</h1>
      <h2 className="l-name">Endresen</h2>
    </LogoStyled>
  )
}

export const ProfileImgSmall = () => {
  return (
    <figure>
      <ProfileImgSmallScreen src={portfolioImg} alt="Emil Endresen" />
    </figure>
  )
}

export const ProfileImgLarge = () => {
  return (
    <figure className="figure-desktop">
      <ProfileImgDesktop src={portfolioImg} alt="Emil Endresen" />
    </figure>
  )
}
