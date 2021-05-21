import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { BlogPostsDescriptionQuery } from "#base/graphql-types"
import BlogPosts from "#templates/blog-posts-template"

export default function BlogPostsQuery() {
  const data: BlogPostsDescriptionQuery = useStaticQuery(graphql`
    query BlogPostsDescription {
      allFile(
        filter: { sourceInstanceName: { eq: "posts" } }
        sort: {
          fields: childrenMarkdownRemark___frontmatter___date
          order: DESC
        }
      ) {
        edges {
          node {
            childMarkdownRemark {
              fields {
                slug
              }
              id
              frontmatter {
                title
                date(formatString: "DD MM, YYYY")
              }
              excerpt
            }
          }
        }
      }
    }
  `)

  return <BlogPosts data={data} />
}
