import React, { useRef, useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import usePosition from "../../hooks/usePosition"
import useScroll from "../../hooks/useScroll"
import Hamburger from "./Hamburger"
import Sidebar from "./Sidebar"
import { menu } from "../../config"

const Logo = styled.div`
  display: inline-block;
  font-family: ${props => props.theme.fonts.logo};
  a {
    color: #000;
    padding: 0 !important;
    margin: 0 !important;
    text-decoration: none;
  }
`

const Marker = styled.div`
  position: absolute;
  height: 4px;
  width: ${props => props.width}px;
  left: ${props => props.xPos}px;
  bottom: 15px;
  background: ${props => props.theme.colors.main_variant1};
  transition: 0.5s;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  @media ${props => props.theme.breakpoints.sm} {
    bottom: 0;
  }
`

const Nav = styled.nav`
  position: fixed;
  z-index: ${props => (props.scrollVisible ? 50 : 10)};
  top: 0;
  width: 100%;
  background: #fff;
  transform: ${props =>
    props.scrollVisible ? "translateY(0)" : "translateY(-10%)"};
  opacity: ${props => (props.scrollVisible ? 1 : 0)};
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  transition: all 0.4s;
  @media${props => props.theme.breakpoints.sm}{
    justify-content: space-between;
  }
`
const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 75%;
  @media ${props => props.theme.breakpoints.sm} {
    display: none;
  }
`
const HamIcon = styled.div`
  overflow: hidden;
  @media${props => props.theme.breakpoints.sm}{
    position: fixed;
    top: 15px ;
    right: 0;
  }
`
const MenuItem = styled(Link)`
  position: relative;
  padding: 20px;
  font-size: 18px;
  color: ${props =>
    props.selected ? props.theme.colors.main_variant1 : "#000"};
  text-decoration: none;
`

const StickyNavbar = ({ activeIndex }) => {
  const articlesItem = useRef()
  const newsletterItem = useRef()
  const aboutItem = useRef()
  const [open, setOpen] = useState(false)
  const { xPos, width, setIndex } = usePosition(
    articlesItem,
    newsletterItem,
    aboutItem
  )
  const refs = [articlesItem, newsletterItem, aboutItem]
  const { scrollVisible } = useScroll()

  useEffect(()=>{
    setIndex(activeIndex + 1)
  },[])
  return (
    <>
      <Nav open={open} scrollVisible={scrollVisible}>
        <Logo>
          <Link to="/">Na Froncie</Link>
        </Logo>
        <Menu open={open}>
          <Marker open={open} xPos={xPos} width={width} />
          {menu.map((item, i) => (
            <MenuItem
              selected={i === activeIndex}
              onMouseEnter={() => setIndex(i + 1)}
              onMouseLeave={() => {
                setIndex(activeIndex + 1)
              }}
              to={item.path}
            >
              <div ref={refs[i]}>{item.content}</div>
            </MenuItem>
          ))}
        </Menu>
        <HamIcon>
          <Hamburger open={open} setOpen={setOpen} />
        </HamIcon>
      </Nav>
      <Sidebar open={open} />
    </>
  )
}
export default StickyNavbar
