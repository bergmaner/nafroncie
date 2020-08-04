exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `)

  const postsPerPage = 3
  const pagesCount = Math.ceil(data.allMdx.edges.length / postsPerPage)
  Array.from({ length: pagesCount }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: require.resolve("./src/templates/AllArticles.js"),
      context: {
        max: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        pagesCount,
      },
    })
  })
}
