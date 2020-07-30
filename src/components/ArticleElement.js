import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Calendar from "./Calendar"

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
  width: 100%;
`
const Categories = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 10px 0;
`
const Category = styled.div`
  background: ${props => props.theme.colors.main_variant2};
  display: inline-block;
  color: #fff;
  font-size: 14px;
  position: relative;
  padding: 5px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  margin: 0 30px 0 0;
  text-decoration: none;
  :before {
    background: #fff;
    width: 10px;
    height: 10px;
    content: "";
    display: inline-block;
    border-radius: 20px;
    margin: 0 5px 0 0;
  }
  :after {
    display: inline-block;
    border: 14px solid;
    border-color: transparent transparent transparent
      ${props => props.theme.colors.main_variant2};
    height: 0;
    width: 0;
    position: absolute;
    right: -28px;
    top: 0;
    content: "";
    display: inline-block;
  }
`
const Header = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

const ArticleElement = ({ date, title, content, categories }) => {
  const cats = categories.split(",")
  console.log(cats)

  const data = useStaticQuery(graphql`
    query {
      imageSharp(fluid: { originalName: { eq: "computer.png" } }) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)
  return (
    <Container>
      <ImageWrapper>
        <Image fluid={data.imageSharp.fluid} />
      </ImageWrapper>
      <ContentWrapper>
        <Header><h2>{title}</h2><Calendar/></Header>
        <Categories>
          {cats.map((category, index) => (
            <Category key={index}>{category}</Category>
          ))}
        </Categories>
        <p>{content}</p>
      </ContentWrapper>
    </Container>
  )
}
export default ArticleElement
