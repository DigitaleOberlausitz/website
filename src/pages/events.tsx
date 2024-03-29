import React from "react"

import * as R from "ramda"
import { graphql, Link } from "gatsby"
import { DateTime } from "luxon"

import Layout from "../components/layout"
import { Col, Container, Row } from "reactstrap"

/**
 * This date is used to limit JUG talks. Only those talks which are after this date are used
 * in the website.
 */
const JUG_EVENT_LIMIT = DateTime.fromISO("2018-01-01")

const DefaultEvent = ({ event }) => {
  const {
    html,
    fields: { slug },
    frontmatter: { title, location, startTime },
  } = event

  return (
    <article>
      <header style={{ marginBottom: "1em" }}>
        <h2>
          <Link to={slug}>{title}</Link>
        </h2>
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
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  )
}

const JugEvent = ({ event }) => {
  const { title, link } = event

  return (
    <article>
      <header>
        <h2>JUG-Görlitz: {title}</h2>
      </header>
      <div>
        <p>
          Vortrag der Java-User-Group zum Thema <strong>{title}</strong>.
        </p>
        <p>
          Weitere Infos finden Sie auf der Webseite der JUG unter:
          <br /> <a href={link}>{link}</a>.
        </p>
      </div>
    </article>
  )
}

export default ({ data }) => {
  const events = data.events
    ? data.events.edges
        .map((edge) => edge.node)
        .map((node) => ({
          date: node.frontmatter.date,
          type: "defaultEvent",
          node: node,
        }))
    : []

  const jugEvents = data.jugEvents
    ? data.jugEvents.edges
        .map((edge) => edge.node)
        .map((node) => {
          return {
            date: node.date,
            type: "jugEvent",
            node: node,
          }
        })
        .filter((node) => {
          const nodeDate = DateTime.fromISO(node.date)

          return nodeDate > JUG_EVENT_LIMIT
        })
    : []

  const allEvents = R.reverse(R.sortBy((eventNode) => eventNode.date)([...events, ...jugEvents]))

  return (
    <Layout>
      <h1>Veranstaltungen</h1>
      {allEvents.map((event, i) => {
        switch (event.type) {
          case "defaultEvent":
            return (
              <ListEntry icon={event.node.frontmatter.icon} key={i} date={event.node.frontmatter.date}>
                <DefaultEvent event={event.node} />
              </ListEntry>
            )
          case "jugEvent":
            return (
              <ListEntry icon="jug_logo.png" key={i} date={event.node.date}>
                <JugEvent event={event.node} />
              </ListEntry>
            )
          default:
            return null
        }
      })}
    </Layout>
  )
}

const ListEntry = ({ children, icon, date }) => (
  <Container style={{ marginBottom: "3em", marginTop: "1em" }}>
    <Row>
      <Col
        md={2}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          marginTop: "1rem",
          alignItems: "center",
        }}
      >
        {icon && (
          <div>
            <img style={{ maxWidth: "6rem" }} alt="logo" src={require(`../../content/images/${icon}`)?.default} />
          </div>
        )}

        {date && (
          <div>
            <strong>
              <time dateTime={date}>{DateTime.fromISO(date).toFormat("yyyy-MM-dd")}</time>
            </strong>
          </div>
        )}
      </Col>
      <Col>{children}</Col>
    </Row>
    <hr style={{ marginTop: "1rem" }} />
  </Container>
)

export const query = graphql`
  {
    jugEvents: allAtomEntry {
      edges {
        node {
          title
          link
          date
          description
        }
      }
    }
    events: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fields: { sourceName: { eq: "events" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
            icon
            location
            startTime
          }
          html
        }
      }
    }
  }
`
