import React from "react"
import Navbar from "../components/nav/Navbar"
import StickyNavbar from "../components/nav/StickyNavbar"
import HeroHeader from "../components/hero/HeroHeader"
import { mainDescription } from "../config"

const About = () => {
  return (
    <div>
      <Navbar activeIndex={2} />
      <StickyNavbar/>
      <HeroHeader name= "O mnie" description= "O mnie" />
    </div>
  )
}
export default About
