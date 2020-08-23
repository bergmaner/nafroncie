import React from "react"
import Navbar from "../components/nav/Navbar"
import StickyNavbar from "../components/nav/StickyNavbar"
import HeroHeader from "../components/hero/HeroHeader"
import Newsletter from "../components/Newsletter"
import { newsletterDescription } from "../config"

const NewsletterPage = () => {
  return (
    <div>
      <Navbar activeIndex={1} />
      <StickyNavbar/>
      <HeroHeader name="Newsletter" description={newsletterDescription} />
      <Newsletter/>
    </div>
  )
}
export default NewsletterPage
