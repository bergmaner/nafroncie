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

  const postsPerPage = 3;
  const pagesCount = Math.ceil(data.allMdx.edges.length / postsPerPage)
  Array.from({ length: pagesCount }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/articles/1` : `/articles/${i + 1}`,
      component: require.resolve("./src/templates/AllArticles.js"),
      context: {
        max: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        pagesCount,
      },
    })
  })

data.allMdx.edges.forEach(edge => {
  const slug = edge.node.frontmatter.slug
  const id = edge.node.id
  actions.createPage({
    path: `/article/${slug}`,
    component: require.resolve(`./src/templates/Article.js`),
    context:{id},

  })
})

}
