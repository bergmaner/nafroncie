import React, {useState} from "react"
import styled from "styled-components"

const Menu = styled.div`
width: 40px;
height: 40px;
display: flex;
flex-direction: column;
justify-content: space-between;
cursor: pointer;
transition: transform 330ms ease-out;
transform: ${ props => props.open ? "rotate(-45deg)" : ""}; 
span{
    background-color: #000;
    border-radius: 5px;
    width: 100%;
    height: 6px;
}

span:nth-child(1){
    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: right;
    width: 50%;
    transform: ${props => props.open ? "rotate(-90deg) translateX(3px)" : ""};
}
span:nth-child(3){
    align-self: flex-end;
    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: left;
    width: 50%;
    transform: ${props => props.open ? "rotate(-90deg) translateX(-3px)" : ""};
}
`;

const Hamburger = () => {
    const [open, setOpen] = useState(false);
  return (
    <Menu open={open} onClick={() => setOpen(!open)}>
      <span></span>
      <span></span>
      <span></span>
    </Menu>
  )
}
export default Hamburger
