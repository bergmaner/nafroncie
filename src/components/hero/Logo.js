import React, {memo} from "react"
import styled from "styled-components"
import Typical from "react-typical"

const LogoContainer = styled.div`
  font-size: 35px;
  padding: 0 0 0 50px;
  font-family: ${props => props.theme.fonts.logo};
`
const Logo = ({name}) => {
    return(
        <LogoContainer>
        {" "}
        <Typical
          steps={["",2000,name, 6000]}
          loop={Infinity}
        />
      </LogoContainer>
    )
}
export default memo(Logo)