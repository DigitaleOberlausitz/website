import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
  const edges = data.allMarkdownRemark.edges

  return (
    <Layout>
      {edges.map(edge => {
        const {
          id,
          html,
          frontmatter: { title, date },
        } = edge.node

        return (
          <article key={id}>
            <header>
              <h1>{title}</h1>
              <strong>
                <time dateTime={date}>{date}</time>
              </strong>
            </header>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </article>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceName: { eq: "events" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          html
        }
      }
    }
  }
`
