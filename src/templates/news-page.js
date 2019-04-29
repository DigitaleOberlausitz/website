import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
  const {
    html,
    frontmatter: { title, date },
  } = data.markdownRemark

  return (
    <Layout>
      <article className="news-article">
        <header>
          <h1>{title}</h1>
          <strong>
            <time dateTime={date}>{date}</time>
          </strong>
        </header>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
