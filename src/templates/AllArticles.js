import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ArticleList from "../components/article/ArticleList"
import Pagination from "../components/Pagination"
import {articlesDescription} from "../config"

const AllArticles = ({ pageContext, data }) => {

  const { currentPage, pagesCount } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === pagesCount
  const prevPage = `/articles/${currentPage - 1}`
  const nextPage = `/articles/${currentPage + 1}`
  const articles = data?.allMdx?.edges;
  return (
    <Layout activeIndex={0} name= "Artykuły" description={articlesDescription} path="#articlesList">
      <ArticleList articles={articles} />
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
 </Layout>
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
