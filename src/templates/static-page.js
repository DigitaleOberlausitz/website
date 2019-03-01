import React from "react"

import { graphql } from "gatsby"

import { renderAst } from "../utils/custom-components"

import Layout from "../components/layout"

export default ({ data }) => {
  const { htmlAst } = data.markdownRemark

  return (
    <Layout>
      {renderAst(htmlAst)}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
        htmlAst
      frontmatter {
        title
        date
      }
    }
  }
`
