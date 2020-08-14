import React from "react"
import Navbar from "../components/Navbar"
import HeroHeader from "../components/HeroHeader"
import { mainDescription } from "../config"

const About = () => {
  return (
    <div>
      <Navbar isAbout />
      <HeroHeader name= "O mnie" description= "O mnie" />
    </div>
  )
}
export default About
