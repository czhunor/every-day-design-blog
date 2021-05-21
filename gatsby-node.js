const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const markDownPosts = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "posts" } }) {
        edges {
          node {
            childMarkdownRemark {
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `)

  markDownPosts.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: node.childMarkdownRemark.fields.slug,
      component: path.resolve(
        `./src/components/queries/blog-post-page-query.tsx`
      ),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.childMarkdownRemark.fields.slug,
      },
    })
  })

  const markDownPages = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "pages" } }) {
        edges {
          node {
            childMarkdownRemark {
              fields {
                slug
              }
            }
            name
          }
        }
      }
    }
  `)

  markDownPages.data.allFile.edges.forEach(({ node }) => {
    const pageName = node.name
    let component

    switch (pageName) {
      case `index`:
        component = path.resolve(`./src/components/queries/main-page-query.tsx`)
        break
      case `about`:
        component = path.resolve(
          `./src/components/queries/about-page-query.tsx`
        )
        break
      default:
        //TODO: error handling
        break
    }

    createPage({
      path: node.childMarkdownRemark.fields.slug,
      component: component,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.childMarkdownRemark.fields.slug,
      },
    })
  })
}

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  })
}
