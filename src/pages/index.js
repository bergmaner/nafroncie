import React from "react"
import Navbar from "../components/Navbar"
import HeroHeader from "../components/HeroHeader"
import { mainDescription } from "../config"

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroHeader description={mainDescription} />
    </div>
  )
}
export default Home
