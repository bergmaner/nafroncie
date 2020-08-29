import React from "react"
import Layout from "../components/Layout"
import Newsletter from "../components/Newsletter"
import { newsletterDescription } from "../config"

const NewsletterPage = () => {
  return (
    <Layout name="Newsletter" path="#newsletter" description={newsletterDescription} activeIndex={1}>
      <Newsletter/>
    </Layout>
  )
}
export default NewsletterPage
