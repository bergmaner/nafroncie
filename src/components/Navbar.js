import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = styled.div`
width: 100%;
  height: 60px;
  justify-content: center;
  z-index:5;
  background: transparent
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  
`

const NavItem = styled(Link)`
  color: #000;
  text-decoration: none;
  margin: 0 0.5rem;
  transition: 0.2s all ease;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transform: rotate(90deg) translateX(-20px);
  background-color: ${props => props.theme.colors.main_variant3};
  border-bottom-right-radius: 200px;
  border-top-right-radius: 200px;
  border-left: 0;
  :hover{
    transform: rotate(90deg) translateX(0px);
    color: #fff;
    background-color: ${props => props.theme.colors.main_variant2};
 }

`

const Logo = styled.div`
  font-family: ${props => props.theme.fonts.logo};
`

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
`

const NavContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  max-width: 850px;
  margin: auto;
  justify-content: space-between;
`

const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 100%;
  align-items: center;
  margin: 0;
  flex: 1 1;
`

const Text = styled.span`
  transform: rotate(270deg);
  padding-top: 10px;
`

const Navbar = () => (
  <Nav>
    <NavContent>
      <Logo>
        <StyledLink to="/">Na Froncie</StyledLink>
      </Logo>
      <NavItems>
        <NavItem to="/articles/1">
          <Text>Artykuły</Text>
        </NavItem>
        <NavItem to="/">
          <Text>Newsletter</Text>
        </NavItem>
        <NavItem to="/">
          <Text>O mnie</Text>
        </NavItem>
      </NavItems>
    </NavContent>
  </Nav>
)
export default Navbar
