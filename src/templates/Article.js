import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import {preToCodeBlock} from "mdx-utils"
import ReactDisqusComments from "react-disqus-comments"
import Layout from "../components/Layout"
import Calendar from "../components/Calendar"
import Title from "../components/mdx/Title"
import Paragraph from "../components/mdx/Paragraph"
import H2 from "../components/mdx/H2"
import Text from "../components/mdx/Text"
import Code from "../components/mdx/Code"
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
    <>
      <MDXProvider
        components={{
          h1: Title,
          h2: H2,
          h4: Text,
          p: Paragraph,
          pre: preProps => {
            const props = preToCodeBlock(preProps)
            if(props){
              return <Code {...props} />
            }
            return <pre {...preProps} />
          }
        }}
      >
<Layout activeIndex={0} name= "Artykuły" description={articlesDescription}>
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
        </Layout>
      </MDXProvider>
    </>
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
