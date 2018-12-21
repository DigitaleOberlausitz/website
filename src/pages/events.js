import React from "react"

import * as R from "ramda"
import { graphql, Link } from "gatsby"

import moment from "moment"

import Layout from "../components/layout"

/**
 * This date is used to limit JUG talks. Only those talks which are after this date are used
 * in the website.
 */
const JUG_EVENT_LIMIT = moment("2018-01-01")

const DefaultEvent = ({event}) => {
    const {
      html,
      fields: { slug },
      frontmatter: { title, date },
    } = event

  return (
    <article>
      <header>
        <h1>
          <Link to={slug}>{title}</Link>
        </h1>
        <strong>
          <time dateTime={date}>{date}</time>
        </strong>
      </header>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  )
}

const JugEvent = ({event}) => {
  const {
    title,
    link,
    date,
    description,
  } = event

  const formattedDate = moment(date).format("YYYY-MM-DD")

  return (
    <article>
      <header>
        <h1>JUG-Görlitz: {title}</h1>
        <strong>
          <time dateTime={date}>{formattedDate}</time>
        </strong>
      </header>
      <div>
        <p>
        Vortrag der Java-User-Group zum Thema <strong>{title}</strong>.
        </p>
        <p>
        Weitere Infos finden Sie auf der Webseite der JUG unter:<br/> <a href={{link}}>{link}</a>.
        </p>
      </div>
    </article>
  )
}

export default ({ data }) => {
  const events = data.events ? data.events.edges.map(edge => edge.node).map(node => ({
    date: node.frontmatter.date,
    type: "defaultEvent",
    node: node,
  })) : []

  const jugEvents = data.jugEvents ? data.jugEvents.edges
    .map(edge => edge.node)
    .map(node => {
      return {
        date: node.date,
        type: "jugEvent",
        node: node,
      }
    })
    .filter(node => {
      const nodeDate = moment(node.date)

      return nodeDate.isAfter(JUG_EVENT_LIMIT)
    })
    : []

  const allEvents = R.reverse(R.sortBy(eventNode => eventNode.date)([...events, ...jugEvents]))

  return (
    <Layout>
      {allEvents.map((event, i) => {
        switch(event.type) {
          case "defaultEvent": return <ListEntry><DefaultEvent key={i} event={event.node}/></ListEntry>
          case "jugEvent": return <ListEntry><JugEvent key={i} event={event.node}/></ListEntry>
          default: return null
        }
      })}
    </Layout>
  )
}

const ListEntry = ({children}) => (
  <div style={{marginBottom: "4em", marginTop:"1em"}}>
    {children}
    <hr/>
  </div>
)


export const query = graphql`
  query {
    jugEvents:  allAtomEntry {
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
      sort: { fields: [frontmatter___date], order: DESC }
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
          }
          html
        }
      }
    }
  }
`
