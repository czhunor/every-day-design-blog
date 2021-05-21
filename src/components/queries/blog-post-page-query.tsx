import React from "react"
import { graphql } from "gatsby"
import { BlogPostQuery } from "#base/graphql-types"
import BlogPostTemplate from "#templates/blog-post-template"

interface BlogPostProps {
  data: BlogPostQuery
}

export default function BlogPost({ data }: BlogPostProps) {
  return <BlogPostTemplate data={data} />
}

export const query = graphql`
  query BlogPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
