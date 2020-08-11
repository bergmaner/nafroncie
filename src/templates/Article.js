import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import ReactDisqusComments from "react-disqus-comments"
import Navbar from "../components/Navbar"
import HeroHeader from "../components/HeroHeader"
import Calendar from "../components/Calendar"
import Title from "../components/mdx/Title"
import H2 from "../components/mdx/H2"
import Text from "../components/mdx/Text"
import { articlesDescription } from "../config"
import styled from "styled-components"

const Container = styled.div`
  background: #fff;
  padding: 10%;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 0 30px 0;
`
const Comments = styled.div`
  padding: 40px 0;
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
          h2: H2,
          div: Text,
        }}
      >
        <Navbar isArticle />
        <HeroHeader name="Artykuły" description={articlesDescription} />
        <Container>
          <Header>
            <h1>{title}</h1>
            <Calendar date={date.split(" ")} />
          </Header>
          <MDXRenderer>{body}</MDXRenderer>
          <Comments>
            <ReactDisqusComments shortname="na-froncie" />
          </Comments>
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
