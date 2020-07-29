import React from "react"
import ArticleElement from "./ArticleElement"
import styled from "styled-components"

const ArticleContainer = styled.div`
div:nth-child(even){
    flex-direction: row-reverse;
}
`;

const ArticleList = () => {
    return(
        <ArticleContainer>
        <ArticleElement
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
        />
      </ArticleContainer>
    )
}
export default ArticleList;