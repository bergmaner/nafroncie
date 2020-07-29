import React from "react";
import styled from "styled-components";

const WaveComponent = styled.svg`
position: absolute;
bottom: 0;
left: 0;
fill: ${props => props.theme.colors.main_variant3};
`;

const Wave = () => (
<WaveComponent xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path d="M0,96L40,96C80,96,160,96,240,96C320,96,400,96,480,122.7C560,149,640,203,720,224C800,245,880,235,960,192C1040,149,1120,75,1200,48C1280,21,1360,43,1400,53.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></WaveComponent>
)
export default Wave;