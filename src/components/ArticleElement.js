import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Calendar from "./Calendar"
import Button from "./Button"
import CategoryList from "./CategoryList"

const ImageWrapper = styled.div`
  width: 55%;
`
const ContentWrapper = styled.div`
  width: 45%;
  padding: 40px 20px 0px 20px;
  background: transparent !important;
`

const Container = styled.section`
  display: flex;
  align-items: flex-start;
  background: #fff;
`
const Image = styled(Img)`
  width: 100%;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent !important;
`
const Paragraph = styled.p`
  margin: 20px 0;
`

const ArticleElement = ({ date, title, content, categories, slug }) => {

  const data = useStaticQuery(graphql`
  query ArticleElementQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
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
  `)
  console.log("date",date)
  return (
    <Container>
      <ImageWrapper>
        <Image fluid={data.mdx.frontmatter.image.childImageSharp.fluid} />
      </ImageWrapper>
      <ContentWrapper>
        <Header>
          <h2>{title}</h2>
          <Calendar date={date?.split(" ")}/>
        </Header>
        <CategoryList categories = {categories?.split(",")}/>
        <Paragraph>{content}</Paragraph>
        <Button path = {`/article/${slug}`} isPossible = {true}>Czytaj Więcej</Button>
      </ContentWrapper>
    </Container>
  )
}
export default ArticleElement
