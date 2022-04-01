import { Link } from "react-router-dom"
import styled from "styled-components"

const NavStyled = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  justify-content: space-around;
`

const LinkStyled = styled(Link)`
  font-size: 1.2rem;
  border: none;
  background-color: transparent;
  color: hsl(0, 0%, 100%);
  text-decoration: none;

  :hover,
  :focus {
    color: hsl(231, 77%, 80%);
  }
`
const LogoSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const LogoStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  font-size: 1.5rem;
  text-transform: uppercase;

  @media (min-width: 550px) {
    font-size: 3rem;
  }

  @media (min-width: 900px) {
    font-size: 4rem;
  }
`

const ProfileImgSmallScreen = styled.img`
  max-width: 50%;
  margin: 4rem auto 4rem auto;
  border-radius: 20px;

  @media (min-width: 800px) {
    display: none;
  }
`

const ProfileImgDesktop = styled.img`
  display: none;

  @media (min-width: 800px) {
    display: block;
    max-width: 70%;
    margin: 4rem auto 4rem auto;
    border-radius: 20px;
  }
`

const NavButtonStyled = styled.button`
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: -0.45rem;
  border: none;
  background-color: transparent;
  color: hsl(0, 0%, 100%);
  cursor: pointer;
  :hover,
  :focus {
    color: hsl(231, 77%, 80%);
  }
`

export {
  LinkStyled,
  NavStyled,
  LogoSectionStyled,
  LogoStyled,
  ProfileImgSmallScreen,
  ProfileImgDesktop,
  NavButtonStyled
}
