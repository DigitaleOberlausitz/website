import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { renderAst } from "../utils/custom-components"

type Props = {
  data: {
    markdownRemark: {
      htmlAst: any
      frontmatter: {
        title: string
        date: string
      }
    }
  }
}

export default ({ data }: Props) => {
  const {
    htmlAst,
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
        <div>{renderAst(htmlAst)}</div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
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
