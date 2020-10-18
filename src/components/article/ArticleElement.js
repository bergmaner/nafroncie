import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Calendar from "../Calendar"
import Button from "../Button"
import CategoryList from "./CategoryList"

const ImageWrapper = styled.div`
  width: 55%;
  @media ${props => props.theme.breakpoints.md}{
    width: 100%;
    }
`
const ContentWrapper = styled.div`
  width: 45%;
  padding: 40px 20px 0px 20px;
  @media ${props => props.theme.breakpoints.md}{
  width: 100%;
  }
`

const Container = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #fff;
   @media ${props => props.theme.breakpoints.md}{
     flex-direction: column;
     align-items: center;
   }
`
const Image = styled(Img)`
  width: 100%;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
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
