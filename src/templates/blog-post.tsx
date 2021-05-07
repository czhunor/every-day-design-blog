import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import { BlogPostQuery } from "../../graphql-types"

interface BlogPostProps {
  data: BlogPostQuery
}

export default function BlogPost({ data }: BlogPostProps) {
  const post = data.markdownRemark
  return (
    <Header>
      <div>
        <h1>{post?.frontmatter?.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post?.html! }} />
      </div>
    </Header>
  )
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
