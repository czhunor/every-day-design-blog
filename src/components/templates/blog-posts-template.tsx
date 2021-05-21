import React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"
import { rhythm } from "../../utils/typography"
import { BlogPostsDescriptionQuery } from "#base/graphql-types"

interface BlogPostsProps {
  data: BlogPostsDescriptionQuery
}

export default function BlogPostsTemplate({ data }: BlogPostsProps) {
  return (
    <div>
      {data.allFile.edges.map(({ node }) => (
        <div key={node.childMarkdownRemark?.id}>
          <Link
            to={node.childMarkdownRemark?.fields?.slug!}
            css={css`
              text-decoration: none;
              color: inherit;
            `}
          >
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.childMarkdownRemark?.frontmatter?.title}{" "}
              <span
                css={css`
                  color: #555;
                `}
              >
                — {node.childMarkdownRemark?.frontmatter?.date}
              </span>
            </h3>
            <p>{node.childMarkdownRemark?.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}
