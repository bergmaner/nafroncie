import React from "react"
import styled from "styled-components"
import Gallery from "./Gallery"

const Section = styled.section`
  background: #fff;
  padding: 10%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const Description = styled.div`
  width: 50%;
  padding-right: 80px;
  line-height: 30px;
  margin: auto 0px;
  @media${props => props.theme.breakpoints.lg}{
    width: 100%;
  }
`

const About = () => {
  return (
    <Section>
        <Description>
      Interesuję sie programowaniem od 15 roku życia, zaczynałem od Scratcha
      tworząc w nim proste gierki. Później poznałem język C++, tworzyłem
      objektowo w nim okienkowe programy typu wisielec, arkanoid, bot do gry.
      Najbardziej mi się spodobała jednak technologia webowa, którą sie głebiej
      zainteresowałem jakieś 3 lata temu. Zacząłem tworzyć strony używając
      czystego javascriptu. Tworzyłem projekty
      </Description>
      <Gallery/>
    </Section>
  )
}
export default About
