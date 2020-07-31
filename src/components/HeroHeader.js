import React, { useRef } from "react"
import styled from "styled-components"
import Wave from "./Wave"
import Soldier from "./Soldier"
import useOpacity from "../hooks/useOpacity"

const Header = styled.div`
  height: 100vh;
  position: sticky;
  opacity: ${props => props.opacity};
  top: 0;
  left: 0;
  z-index: -1;
  background-color: #ffffff;
  background-image: url(${require("../images/background.svg")});
  overflow: hidden;
`

const Logo = styled.div`
  font-size: 35px;
  padding: 0 0 0 50px;
  font-family: ${props => props.theme.fonts.logo};
`
const ImageWrapper = styled.div`
position: absolute;
right: 0;
bottom: 0;
height:100vh;
width: 100%;
display: flex;
justify-content: space-around;
align-items: flex-end;
@media${props => props.theme.breakpoints.lg}{
   display: none;
}
`
const Wrapper = styled.div`
  max-width: 800px;
  font-size: 25px;
  padding: 0 15px;
  position: absolute;
  top: 50%;
  z-index: 5;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Description = styled.div`
  line-height: 1.5;
  width: 500px;
`

const HeroHeader = () => {
    const { ref, opacity } = useOpacity();
  return (
    <Header ref = {ref} opacity={opacity}>
      <Wrapper>
        <Logo>Na Froncie</Logo>
        <Description>
          To nie jest blog militarny, choć tak może to wyglądać na pierwszy rzut
          oka hehe. Zajmuję się Frontendem, choć jestem zaledwie juniorem
          postaram się rozmawiać o tematach, które mogą cię zaciekawić.
        </Description>
      </Wrapper>
      <ImageWrapper>
        <Soldier />
        <Soldier />
        <Soldier />
        <Soldier />
        <Wave />
      </ImageWrapper>
    </Header>
  )
}
export default HeroHeader
