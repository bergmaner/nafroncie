import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import Navbar from "../components/Navbar"
import HeroHeader from "../components/HeroHeader"
import Calendar from "../components/Calendar"
import Title from "../components/mdx/Title"
import Img from "gatsby-image"
import { articlesDescription } from "../config"
import styled from "styled-components"

const Container = styled.div`
  background: #fff;
  padding: 5px 20px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
`

const Article = ({ data }) => {
  const image = data.mdx.frontmatter.image.childImageSharp.fluid
  const title = data.mdx.frontmatter.title
  const body = data.mdx.body
  const date = data.mdx.frontmatter.date
  console.log("im", image)
  return (
    <div>
      <MDXProvider
        components={{
          h1: Title,
        }}
      >
        <Navbar isArticle />
        <HeroHeader description={articlesDescription}/>
        <Container>
          <Header>
            <h1>{title}</h1>
            <Calendar date={date.split(" ")} />
          </Header>
          <Img fluid={image}/>
          <MDXRenderer>{body}</MDXRenderer>
        </Container>
      </MDXProvider>
    </div>
  )
}
export default Article
export const pageQuery = graphql`
  query ArticleQuery($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date(formatString: "dddd DD ,MMMM YYYY", locale: "pl")
        content
        slug
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
