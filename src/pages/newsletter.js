import React from "react"
import Navbar from "../components/Navbar"
import StickyNavbar from "../components/StickyNavbar"
import HeroHeader from "../components/HeroHeader"
import Newsletter from "../components/Newsletter"
import { newsletterDescription } from "../config"

const NewsletterPage = () => {
  return (
    <div>
      <Navbar isNewsletter />
      <StickyNavbar/>
      <HeroHeader name="Newsletter" description={newsletterDescription} />
      <Newsletter/>
    </div>
  )
}
export default NewsletterPage
