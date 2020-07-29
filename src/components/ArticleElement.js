import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const ImageWrapper = styled.div`
  width: 55%;
`
const ContentWrapper = styled.div`
  width: 45%;
  padding: 40px 20px 0px 20px;
`

const Container = styled.div`
  display: flex;
  align-items: flex-start;
`
const Image = styled(Img)`
  width:100%;
`
const Categories = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`

const ArticleElement = ({ fluid, date, title, content, categories }) => {

    const cats = categories.split(",");
    console.log(cats);

  const data = useStaticQuery(graphql`
    query {
      imageSharp(fluid: { originalName: { eq: "computer.png" } }) {
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)
  return (
    <Container>
      <ImageWrapper>
        <Image fluid={fluid ? fluid : data.imageSharp.fluid} />
      </ImageWrapper>
      <ContentWrapper>
        <p>{date}</p>
  <Categories>{cats.map((category, index) => <div key={index}>{category}</div>)}</Categories>
        <h2>{title}</h2>
        <p>{content}</p>
      </ContentWrapper>
    </Container>
  )
}
export default ArticleElement
