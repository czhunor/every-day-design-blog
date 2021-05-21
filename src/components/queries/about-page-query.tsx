import React from "react"
import { graphql } from "gatsby"
import { AboutPageQuery } from "#base/graphql-types"
import AboutPageTemplate from "#templates/about-page-template"

interface AboutPageProps {
  data: AboutPageQuery
}

export default function AboutPage({ data }: AboutPageProps) {
  return <AboutPageTemplate data={data} />
}

export const query = graphql`
  query AboutPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
