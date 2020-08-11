import React from "react"
import styled from "styled-components"
import Wave from "./Wave"
import Soldier from "./Soldier"
import Arrow from "./Arrow"
import useOpacity from "../hooks/useOpacity"

const Header = styled.div`
  height: 100vh;
  position: sticky;
  opacity: ${props => props.opacity};
  top: 0;
  left: 0;
  z-index: ${props => props.zIndex};
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

`
const Wrapper = styled.div`
  max-width: 800px;
  font-size: 25px;
  padding: 0 15px;
  z-index: 5;
  align-self: center;
`

const Description = styled.div`
  line-height: 1.5;
  max-width: 600px;
`

const HeroHeader = ({ description, name }) => {
  const { ref, opacity, zIndex } = useOpacity()
  return (
    <Header ref={ref} opacity={opacity} zIndex ={zIndex}>

      <ImageWrapper>
        <Soldier />
        <Wrapper>
        <Logo>{name}</Logo>
        <Description>{description}<Arrow path="#articlesList"/></Description>

      </Wrapper>
        <Soldier />
        <Wave />
      </ImageWrapper>
    </Header>
  )
}
export default HeroHeader
