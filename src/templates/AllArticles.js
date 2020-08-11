import React from "react"
import { graphql } from "gatsby"
import HeroHeader from "../components/HeroHeader"
import Navbar from "../components/Navbar"
import ArticleList from "../components/ArticleList"
import Pagination from "../components/Pagination"
import {articlesDescription} from "../config"

const AllArticles = ({ pageContext, data }) => {

  const { currentPage, pagesCount } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === pagesCount
  const prevPage = `/articles/${currentPage - 1}`
  const nextPage = `/articles/${currentPage + 1}`
  const articles = data?.allMdx?.edges;
  console.log("data",data, pageContext)
  return (
    <div>
      <Navbar isArticle/>
      <HeroHeader path="#articlesList" name= "Artykuły" description={articlesDescription}/>
      <ArticleList articles={articles} />
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </div>
  )
}
export default AllArticles;
export const pageQuery = graphql`
  query AllArticlesQuery($skip: Int!, $max: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $max
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "dddd DD ,MMMM YYYY", locale: "pl")
            content
            categories
          }
        }
      }
    }
  }
`
