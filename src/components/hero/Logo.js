import React, {memo} from "react"
import styled from "styled-components"
import Typical from "react-typical"

const LogoContainer = styled.div`
  font-size: 35px;
  padding: 0 0 0 50px;
  font-family: ${props => props.theme.fonts.logo};
  @media${props => props.theme.breakpoints.sm}{
    font-size: 25px;
    padding: 0;
  }
`
const Logo = ({name}) => {
    return(
        <LogoContainer>
        {" "}
        <Typical
          steps={["",1000, name, 6000]}
          loop={Infinity}
        />
      </LogoContainer>
    )
}
export default memo(Logo)