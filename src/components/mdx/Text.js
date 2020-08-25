import styled from "styled-components"

export default styled.h4`
padding: 20px 0;
font-size: 18px;
font-weight: normal;
  :first-letter {
    color: ${props => props.theme.colors.main_variant1};
    font-size: 84px; 
    font-weight: 700;
    font-family: ${props => props.theme.fonts.logo};
    float: left;
    vertical-align: top;
    line-height: 70px;
    padding-right: 20px;
    padding-left: 10px;
    padding-top: 5px;
    text-shadow: 2px 2px 0 rgba(56, 60, 80, 0.33)
  }
`
