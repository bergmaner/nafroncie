import React from "react"
import styled from "styled-components"

const InputEl = styled.input`
font-size: 1rem;
border-radius: .25rem;
margin-bottom: .5rem;
padding: 1rem;
background-color: #fff;
color: rgba(0,0,0,.8);
border: 1px solid #fff;
outline: none;
width: 70%;
:focus{
  border: 1px solid #000;
}
`;

const Input = ({ placeholder, value, onChange, type }) => {
  return <InputEl type={type} placeholder={placeholder} value={value} onChange={ (e) => onChange(e.target.value)} />
}
export default Input
