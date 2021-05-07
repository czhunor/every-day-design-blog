import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import { SiteMetadataTitleQuery } from "../../graphql-types"

interface AboutProps {
  data: SiteMetadataTitleQuery
}

export default function About({ data }: AboutProps) {
  return (
    <Header>
      <h1>About {data.site?.siteMetadata?.title}</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Header>
  )
}

export const query = graphql`
  query SiteMetadataTitle {
    site {
      siteMetadata {
        title
      }
    }
  }
`
