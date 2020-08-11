import React from "react"
import Navbar from "../components/Navbar"
import HeroHeader from "../components/HeroHeader"
import Newsletter from "../components/Newsletter"
import { newsletterDescription } from "../config"

const NewsletterPage = () => {
  return (
    <div>
      <Navbar isNewsletter />
      <HeroHeader name="Newsletter" description={newsletterDescription} />
      <Newsletter/>
    </div>
  )
}
export default NewsletterPage
