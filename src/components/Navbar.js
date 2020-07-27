import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"

const Nav = styled.div`
width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  
`

const NavItem = styled(Link)`
color: #000;
text-decoration: none;
margin: 0 .5rem;
padding: 1rem;
`

const Logo = styled.div`
font-family: ${props => props.theme.fonts.logo};

`;

const StyledLink = styled(Link)`
color: #000;
text-decoration: none;
`;

const NavContent = styled.div`
height: 100%;
display: flex;
align-items: center;
max-width: 850px;
margin: auto;
justify-content: space-between;
`;

const NavItems = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
height: 100%;
align-items: center;
margin: 0;
flex: 1 1;
`;


const Navbar = () => (
  <Nav>
      <NavContent>
    <Logo><StyledLink to="/">Na Froncie</StyledLink></Logo>
    <NavItems>
    <NavItem to="/">Artykuły</NavItem>
    <NavItem to="/">Newsletter</NavItem>
    <NavItem to="/">O mnie</NavItem>
    </NavItems>
    </NavContent>
  </Nav>
)
export default Navbar
