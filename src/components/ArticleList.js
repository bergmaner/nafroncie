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
    <ArticleContainer>
      {/* <ArticleElement
          title="O czym jest ten blog?"
          date="2020-07-25"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat diam nisi, quis suscipit ipsum lacinia vitae. Cras non sodales magna. Duis in condimentum sem. Vestibulum pellentesque condimentum magna, ut suscipit ipsum pulvinar quis. Proin eu vestibulum nisi. Maecenas gravida nibh mauris, et eleifend magna fermentum vitae. Phasellus eu tellus tellus. Nam condimentum pulvinar nisi, id euismod elit tincidunt sed. Mauris suscipit ullamcorper finibus. Fusce quam mi, aliquam id justo at, blandit rhoncus urna. Donec ut vehicula libero, et porta quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris cursus non erat scelerisque cursus. Sed rhoncus leo eget viverra cursus. Vivamus elementum facilisis convallis."
          categories="javascript, gatsby"
        />
        <ArticleElement
          title="O czym jest ten blog?"
          date="2020-07-25"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat diam nisi, quis suscipit ipsum lacinia vitae. Cras non sodales magna. Duis in condimentum sem. Vestibulum pellentesque condimentum magna, ut suscipit ipsum pulvinar quis. Proin eu vestibulum nisi. Maecenas gravida nibh mauris, et eleifend magna fermentum vitae. Phasellus eu tellus tellus. Nam condimentum pulvinar nisi, id euismod elit tincidunt sed. Mauris suscipit ullamcorper finibus. Fusce quam mi, aliquam id justo at, blandit rhoncus urna. Donec ut vehicula libero, et porta quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris cursus non erat scelerisque cursus. Sed rhoncus leo eget viverra cursus. Vivamus elementum facilisis convallis."
          categories="javascript"
        />
        <ArticleElement
          title="O czym jest ten blog?"
          date="2020-07-25"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat diam nisi, quis suscipit ipsum lacinia vitae. Cras non sodales magna. Duis in condimentum sem. Vestibulum pellentesque condimentum magna, ut suscipit ipsum pulvinar quis. Proin eu vestibulum nisi. Maecenas gravida nibh mauris, et eleifend magna fermentum vitae. Phasellus eu tellus tellus. Nam condimentum pulvinar nisi, id euismod elit tincidunt sed. Mauris suscipit ullamcorper finibus. Fusce quam mi, aliquam id justo at, blandit rhoncus urna. Donec ut vehicula libero, et porta quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris cursus non erat scelerisque cursus. Sed rhoncus leo eget viverra cursus. Vivamus elementum facilisis convallis."
          categories="javascript, gatsby"
        /> */}

 {/*  */}
 {articles?.map(article => (
        <ArticleElement key={article.node.frontmatter.slug} 
        key = {article.node.frontmatter.slug}
        date = {article.node.frontmatter.date}
        title = {article.node.frontmatter.title}
        content = {article.node.frontmatter.content}
        categories = {article.node.frontmatter.categories}
        />
      ))}
    </ArticleContainer>
  )
}
export default ArticleList
