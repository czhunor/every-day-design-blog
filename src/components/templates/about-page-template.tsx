import React from "react"
import { css } from "@emotion/react"
import Header from "#views/header"
import { AboutPageQuery } from "#base/graphql-types"

interface AboutPageProps {
  data: AboutPageQuery
}

export default function AboutPageTemplate({ data }: AboutPageProps) {
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
      </div>
    </Header>
  )
}
