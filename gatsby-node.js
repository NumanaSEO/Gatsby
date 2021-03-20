const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve
  (`src/templates/blog-post.js`)
  return graphql(`
    query PostsQuery {
      wordPress {
        posts {
          nodes {
            title
            id
            slug
            uri
            content
            elementorData
          }
        }
      }
    }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }
    
    // Create blog post pages.
    result.data.wordPress.posts.nodes.forEach(edge => {
      createPage({
        path: `${edge.uri}`,
        component: blogPostTemplate,
        context: edge,
      })
    })
  })
}