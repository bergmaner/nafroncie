import React from "react"
import styled from "styled-components"

const Button = styled.button`
  outline: none;
  border: 1px solid #fff;
  font-size: 1rem;
  border-radius: 0.25rem;
  padding: 1rem;
  width: 30%;
  background: ${props => props.theme.colors.main_variant2};
  transition: 0.3s ease all ;
  color: #fff;
  :hover{
      cursor: pointer;
      border: 1px solid #000;
      color: #000;
  }
  @media${props => props.theme.breakpoints.sm}{
    width: 100%;
  }
`

const SubmitButton = ({onClick}) => {
  return <Button onClick={onClick}>Subskrybuj</Button>
}
export default SubmitButton
