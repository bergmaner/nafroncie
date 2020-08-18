import React, { useRef } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import usePosition from "../../hooks/usePosition"
import useScroll from "../../hooks/useScroll"

const Logo = styled.div`
  font-family: ${props => props.theme.fonts.logo};
  a {
    color: #000;
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
`

const Nav = styled.nav`
  position: fixed;
  z-index: 20;
  top: 0;
  width: 100%;
  background: #fff;
  transform: ${ props => props.scrollVisible ? "translateY(0)" : "translateY(-100%)"};
  opacity: ${ props => props.scrollVisible ? 1 : 0 };
  display: flex;
  padding: 15px 0px;
  justify-content: space-between;
  align-items: center;
  transition: all 0.4s;
  a {
    position: relative;
    margin: 0 20px;
    padding: 15px 0;
    font-size: 18px;
    color: #000;
    text-decoration: none;
  }
`
const Menu = styled.div``

const StickyNavbar = () => {
  const articlesItem = useRef()
  const newsletterItem = useRef()
  const aboutItem = useRef()
  const { xPos, width, setIndex } = usePosition(
    articlesItem,
    newsletterItem,
    aboutItem
  )
  const { scrollVisible } = useScroll()
  console.log("ole", xPos)
  return (
    <Nav scrollVisible={scrollVisible}>
      <Logo>
        <Link to="/">Na Froncie</Link>
      </Logo>
      <Marker xPos={xPos} width={width} />
      <Menu>
        <Link
          onMouseEnter={() => setIndex(1)}
          ref={articlesItem}
          to="/articles/1"
        >
          Artykuły
        </Link>
        <Link
          onMouseEnter={() => setIndex(2)}
          ref={newsletterItem}
          to="/newsletter"
        >
          Newsletter
        </Link>
        <Link onMouseEnter={() => setIndex(3)} ref={aboutItem} to="/o-mnie">
          O mnie
        </Link>
      </Menu>
    </Nav>
  )
}
export default StickyNavbar
