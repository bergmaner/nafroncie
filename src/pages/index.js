import React from "react"
import styled from "styled-components"
import Wave from "../components/Wave"
import Soldier from "../components/Soldier"

const HeroHeader = styled.div`
height: 100vh;
`;

const Logo = styled.div`
font-family: ${props => props.theme.fonts.logo};
font-size: 35px;
margin-top: 60px;
padding: 20px 50px;
display: inline-block;

`
const ImageWrapper = styled.div`
position: absolute;
right: 0;
bottom: 50px;
`;
const Wrapper = styled.div`

`;

const Description = styled.div`
width: 500px;
line-height: 1.5;
padding: 0 15px;
`;

const Home = () => {
  return (
    <HeroHeader>
      <Wrapper>
  <Logo>Na Froncie</Logo>
  <Description>To nie jest blog militarny, choć tak może to wyglądać na pierwszy rzut oka hehe. Zajmuję się Frontendem, choć jestem zaledwie juniorem postaram się rozmawiać o tematach, które mogą cię zaciekawić.</Description>
  </Wrapper>
  <ImageWrapper>
<Soldier/>
<Soldier/>
  </ImageWrapper>
  <Wave/>
  </HeroHeader>
    )
}
export default Home
