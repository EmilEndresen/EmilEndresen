import {
  PitchTextFirst,
  PitchTextSecond,
  Logo,
  ProfileImgSmall,
  ProfileImgLarge
} from "./Pitch/PitchConsts"
import { LogoSectionStyled } from "./StyledComponents"

export default function Pitch() {
  return (
    <div>
      <LogoSectionStyled className="logo-area">
        <Logo />
        <ProfileImgSmall />
      </LogoSectionStyled>

      <portfolioImgSmall />
      <section className="pitch-area">
        <ProfileImgLarge />

        <div className="pitch-text">
          <p>{PitchTextFirst}</p>
          <p>{PitchTextSecond}</p>
        </div>
      </section>
    </div>
  )
}
