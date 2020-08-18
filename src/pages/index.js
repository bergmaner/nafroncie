import React from "react"
import Navbar from "../components/nav/Navbar"
import HeroHeader from "../components/hero/HeroHeader"
import { mainDescription } from "../config"

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroHeader name="Na froncie" description={mainDescription} />
    </div>
  )
}
export default Home
