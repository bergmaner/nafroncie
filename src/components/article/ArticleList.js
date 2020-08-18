import React, { useRef } from "react"
import ArticleElement from "./ArticleElement"
import styled from "styled-components"

const ArticleContainer = styled.div`
  section:nth-child(even) {
    flex-direction: row-reverse;
    background: #f7f7f7;
  }
`
const ArticleList = ({ articles }) => {
  console.log("art",articles)
  return (
    <ArticleContainer id="articlesList">
 {articles?.map(article => (
        <ArticleElement key={article.node.frontmatter.slug} 
        key = {article.node.frontmatter.slug}
        date = {article.node.frontmatter.date}
        title = {article.node.frontmatter.title}
        content = {article.node.frontmatter.content}
        slug = {article.node.frontmatter.slug}
        categories = {article.node.frontmatter.categories}
        />
      ))}
    </ArticleContainer>
  )
}
export default ArticleList
