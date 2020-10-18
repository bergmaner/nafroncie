import React from "react"
import styled from "styled-components"
import Wave from "./Wave"
import Soldier from "./Soldier"
import Arrow from "./Arrow"
import Logo from "./Logo"
import useOpacity from "../../hooks/useOpacity"

const Header = styled.div`
  height: 100vh;
  position: sticky;
  opacity: ${props => props.opacity};
  top: 0;
  left: 0;
  z-index: ${props => props.zIndex};
  background-color: #ffffff;
  background-image: url(${require("../../images/background.svg")});
  overflow: hidden;
`

const ImageWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`
const Wrapper = styled.div`
  max-width: 800px;
  font-size: ${props => props.theme.sizes.h4.normal};
  padding: 0 15px;
  z-index: 5;
  align-self: center;
  @media${props => props.theme.breakpoints.sm}{
    font-size: ${props => props.theme.sizes.h4.md};
    max-width: 80%;
    padding: 0;
  }
`

const Description = styled.div`
  line-height: 1.5;
  max-width: 600px;
`

const HeroHeader = ({ description, name, path }) => {
  const { ref, opacity, zIndex } = useOpacity()

  return (
    <Header ref={ref} opacity={opacity} zIndex={zIndex}>
      <ImageWrapper>
        <Soldier />
        <Wrapper>
          <Logo name={name} />
          <Description>
            {description}
            <Arrow path={path} />
          </Description>
        </Wrapper>
        <Soldier />
        <Wave />
      </ImageWrapper>
    </Header>
  )
}
export default HeroHeader
