import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { Col, Container, Row } from "reactstrap"

export default ({ data }) => {
  const {
    html,
    frontmatter: { title, date, icon, location, startTime },
  } = data.markdownRemark

  const header = (
    <header>
      <h1>{title}</h1>
      <strong>
        <time dateTime={date}>{date}</time>
      </strong>
      {location && (
        <p>
          <strong>{location}</strong>
        </p>
      )}
      {startTime && (
        <p>
          <strong>Start: {startTime}</strong>
        </p>
      )}
    </header>
  )
  return (
    <Layout>
      <article>
        {icon && (
          <Container>
            <Row>
              <Col md={2}>
                <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img
                    style={{ marginBottom: "0" }}
                    alt="logo"
                    src={require(`../../content/images/${icon}`)?.default}
                  />
                </div>
              </Col>
              <Col>{header}</Col>
            </Row>
          </Container>
        )}

        {!icon && header}

        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        icon
        location
        startTime
      }
    }
  }
`
