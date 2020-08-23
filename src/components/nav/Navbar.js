import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Hamburger from "./Hamburger"
import Sidebar from "./Sidebar"
import {menu} from "../../config"

const Nav = styled.div`
  width: 100%;
  height: 60px;
  justify-content: center;
  z-index: 35;
  background: transparent;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  @media ${props => props.theme.breakpoints.md}{
    padding: 0 15px;
  }
  @media ${props => props.theme.breakpoints.sm}{
   height: auto;
   padding: 0;
  }
`

const NavItem = styled(Link)`
  color: ${props => (props.isChecked ? "#fff" : "#000")};
  text-decoration: none;
  margin: 0 0.5rem;
  transition: 0.2s all ease;
  width: 100px;
  height: 100px;
  cursor: ${props => (props.isChecked ? "default" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: space-around;
  transform: ${props =>
    props.isChecked
      ? "rotate(90deg) translateX(0px)"
      : "rotate(90deg) translateX(-20px)"};
  background-color: ${props =>
    props.isChecked
      ? props.theme.colors.main_variant2
      : props.theme.colors.main_variant3};
  border-bottom-right-radius: 200px;
  border-top-right-radius: 200px;
  border-left: 0;
  :hover {
    transform: rotate(90deg) translateX(0px);
    color: #fff;
    background-color: ${props => props.theme.colors.main_variant2};
  }
  @media${props => props.theme.breakpoints.sm}{
  transform: rotate(0deg) translateX(0px);
   width: 100%;
   height: auto;
   border-radius: 0;
   :hover{
    transform: rotate(0deg) translateX(0px);
   }
}
`

const Logo = styled.div`
  font-family: ${props => props.theme.fonts.logo};
  align-self: flex-start;
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
  transition: 0.34s;
 @media${props => props.theme.breakpoints.sm}{
   display:none;
 }
`

const Text = styled.span`
  transform: rotate(270deg);
  padding-top: 10px;

`

const HamIcon = styled.div`
  overflow: hidden;
  @media${props => props.theme.breakpoints.sm}{
    position: absolute;
    top: 0 ;
    right: 0;
  }
`

const Navbar = ({ activeIndex }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <Nav>
      <NavContent>
        <Logo>
          <StyledLink to="/">Na Froncie</StyledLink>
        </Logo>
        <NavItems open={open}>
          {menu.map((item,index) => <NavItem isChecked={index === activeIndex} to={item.path}><Text>{item.content}</Text></NavItem>)}
        </NavItems>
        <HamIcon>
          <Hamburger open={open} setOpen={setOpen} />
        </HamIcon>
      </NavContent>
    </Nav>
    <Sidebar open={open}/>
    </>
  )
}
export default Navbar
