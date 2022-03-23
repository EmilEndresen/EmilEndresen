import { Link } from "react-router-dom"
import styled from "styled-components"

const ButtonDivStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 1em;
`
const LogoDivStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ProfileImgStyled = styled.img`
  width: 50%;
  margin: 4rem auto 4rem auto;
`

const LinkStyled = styled(Link)`
  font-size: 1.2rem;
  border: none;
  background-color: transparent;
  color: hsl(0, 0%, 100%);
  text-decoration: none;
`

const NavButtonStyled = styled.button`
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: -0.45rem;
  border: none;
  background-color: transparent;
  color: hsl(0, 0%, 100%);
  cursor: pointer;
`

export { LinkStyled, ButtonDivStyled, LogoDivStyled, ProfileImgStyled, NavButtonStyled }
