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
          steps={["",1000,name]}
          loop={1}
        />
      </LogoContainer>
    )
}
export default memo(Logo)