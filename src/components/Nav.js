import { NavStyled, LinkStyled, NavButtonStyled } from "./StyledComponents"
import { useNavigate } from "react-router-dom"

export default function Nav() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(-1)
  }
  return (
    <NavStyled>
      <NavButtonStyled onClick={handleClick}>&#x25c0;</NavButtonStyled>
      <LinkStyled to="/my-projects">Mine Prosjekter</LinkStyled>
    </NavStyled>
  )
}
