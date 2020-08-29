import React from "react"
import Layout from "../components/Layout"
import About from "../components/About"
import {aboutDescription} from "../config"

const AboutMe = () => {
  return (
<Layout activeIndex={2} name= "O mnie" description={aboutDescription}>
  <About/>
</Layout>
  )
}
export default AboutMe
