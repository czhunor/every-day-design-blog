import React from "react"
import { graphql } from "gatsby"
import { MainPageQuery } from "#base/graphql-types"
import MainPageTemplate from "#templates/main-page-template"

interface MainPageProps {
  data: MainPageQuery
}

export default function MainPage({ data }: MainPageProps) {
  return <MainPageTemplate data={data} />
}

export const query = graphql`
  query MainPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
