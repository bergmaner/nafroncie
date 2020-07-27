import React from "react"
import styled from "styled-components"
import Wave from "./Wave"
import Soldier from "./Soldier"

const Header = styled.div`
height: 100vh;
`;

const Logo = styled.div`
font-size: 50px;
padding: 20px 50px;

`
const ImageWrapper = styled.div`
position: absolute;
right: 0;
bottom: 2px;
width: 100%;
display: flex;
justify-content: space-between;
`;
const Wrapper = styled.div`
max-width: 800px;
color: ${props => props.theme.colors.main};
isolation: isolate;
mix-blend-mode: difference;
font-size: 25px;
padding: 0 15px;
position: absolute;
top: calc(50% - 100px);
z-index: 5;
left: 50%;
transform: translate(-50%, -50%);
`;

const Description = styled.div`
line-height: 1.5;
font-weight: 700;
`;

const HeroHeader = () => (
<Header>
<Wrapper>
<Logo>Na Froncie</Logo>
<Description>To nie jest blog militarny, choć tak może to wyglądać na pierwszy rzut oka hehe. Zajmuję się Frontendem, choć jestem zaledwie juniorem postaram się rozmawiać o tematach, które mogą cię zaciekawić.</Description>
</Wrapper>
<ImageWrapper>
<Soldier/>
<Soldier/>
<Soldier/>
<Soldier/>
<Wave/>
</ImageWrapper>
</Header>
)
export default HeroHeader;
