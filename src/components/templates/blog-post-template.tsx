import React from "react"
import Header from "#views/header"
import { BlogPostQuery } from "#base/graphql-types"

interface BlogPostProps {
  data: BlogPostQuery
}

export default function BlogPostTemplate({ data }: BlogPostProps) {
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
