import { ButtonDivStyled, LinkStyled, NavButtonStyled } from "./StyledComponents"

export default function Nav() {
  return (
    <ButtonDivStyled>
      <NavButtonStyled>&#8962;</NavButtonStyled>
      <LinkStyled to="/about-me">Om meg</LinkStyled>
      <LinkStyled to="/my-projects">Mine Prosjekter</LinkStyled>
    </ButtonDivStyled>
  )
}
