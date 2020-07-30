import React from "react"
import styled from "styled-components"

const Month = styled.strong`
position: absolute;
top: 0;
padding: 0.4em 0;
color: #fff;
background-color: ${ props => props.theme.colors.main_variant2};
box-shadow: 0 2px 0 ${ props => props.theme.colors.main_variant2};
`

const Number = styled.span`
    width: 100%;
    font-size: 2.5em;
    letter-spacing: -0.05em;
    padding-top: 0.8em;
    color: ${ props => props.theme.colors.main_variant2};
`

const Day = styled.strong`
    position: absolute;
    bottom: 0.3em;
    color: ${ props => props.theme.colors.main_variant2};
`

const Card = styled.div`
  font-size: 0.5em; /* change icon size */
  display: block;
  position: relative;
  width: 6em;
  height: 6em;
  background-color: #fff;
  border-radius: 0.6em;
  box-shadow: 0 1px 0 #000, 0 2px 0 #fff, 0 3px 0 #000, 0 4px 0 #fff,
    0 5px 0 #000, 0 0 0 1px #000;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-transform: rotate(0deg) skewY(0deg);
  -webkit-transform-origin: 50% 10%;
  transform-origin: 50% 10%;

  * {
  display: block;
  width: 100%;
  font-weight: bold;
  font-style: normal;
  text-align: center;
}
`

const Calendar = () => {
  return (
    <Card>
      <Day>Czwartek</Day>
      <Month>Lipiec</Month>
      <Number>30</Number>
    </Card>
  )
}
export default Calendar
