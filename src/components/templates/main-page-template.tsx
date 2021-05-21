import React from "react"
import { css } from "@emotion/react"
import Header from "#views/header"
import BlogPostsQuery from "#queries/blog-posts-query"
import { MainPageQuery } from "#base/graphql-types"

interface MainPageProps {
  data: MainPageQuery
}

export default function MainPageTemplate({ data }: MainPageProps) {
  return (
    <Header>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          {data.markdownRemark?.frontmatter?.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark?.html! }} />
        <BlogPostsQuery />
      </div>
    </Header>
  )
}
