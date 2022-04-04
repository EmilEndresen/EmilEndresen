import {
  PitchTextFirst,
  PitchTextSecond,
  Logo,
  ProfileImgSmall,
  ProfileImgLarge,
  PitchTextThird,
  PitchTextFourth,
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
          <p>{PitchTextThird}</p>
          <p>{PitchTextFourth}</p>
        </div>
      </section>
    </div>
  )
}
