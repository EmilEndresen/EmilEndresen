import { LogoStyled, ProfileImgSmallScreen, ProfileImgDesktop } from "../StyledComponents"
import portfolioImg from "../images/headshot.WebP"

export const PitchTextFirst = `
            Jeg går for tiden på kurset Kodehode hvor jeg hvirkelig har fått interessen for frontend ved bruk av HTML, CSS, Javascript, figma og REACT.`

export const PitchTextSecond = `
            I arbeidslivet har jeg i hovedsak jobbet innen salg og service hvor jeg har fått mye god kunnskap, men jeg har hele tiden sett etter noe som passet bedre for meg og mine interesser, dette har jeg funnet gjennom kurset Kodehode og front-end utvikling.
`

export const PitchTextThird = `
            Det jeg liker best med front-end utvikling er at det alltid er noe nytt å lære og noe nytt å lage.
`

export const PitchTextFourth = `
            På fritiden liker jeg å være med min samboer, kode, spille dataspill, og å være med venner.
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
