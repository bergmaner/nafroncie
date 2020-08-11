import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"

const ArrowIcon = styled.div`
position: relative;
top: 7px;
left: 7px;
border: 3px solid ${props => props.theme.colors.main_variant1};
width: 33px;
height: 33px;
display: inline-block;
z-index: 70;
border-radius: 100%;
:hover{
      background: ${props => props.theme.colors.main_variant1};
      cursor: pointer;
      span{
          background:white;
      }
    }
span {
    z-index: 5;
    height: 3px;
    margin:1px;
    width: 10px;
    background: ${props => props.theme.colors.main_variant1};
    transition: 0.4s ease;
}

span:first-child {
    display: block;
    position: absolute;
    transform: rotate(45deg);
    left: 15%;
    bottom:45%;
}

span:nth-child(2) {
    display: block;
    position: absolute;
    transform: rotate(-45deg);
    left: 35%;
    bottom: 45%;
}

span:nth-child(3) {
    display: block;
    position: absolute;
    transform: rotate(45deg);
    left: 15%;
    bottom: 20%;
}

span:nth-child(4) {
    display: block;
    position: absolute;
    transform: rotate(-45deg);
    left: 35%;
    bottom: 20%;
}

:hover span:nth-child(1) {
    transform: rotate(-135deg);
}

:hover span:nth-child(2) {
    transform: rotate(135deg);
}

:hover span:nth-child(3) {
    transform: rotate(225deg);
}

:hover span:nth-child(4) {
    transform: rotate(-225deg);
}
`

const Arrow = ({path}) => {
  return (
      <Link to={path}>
    <ArrowIcon>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </ArrowIcon>
    </Link>
  )
}
export default Arrow
