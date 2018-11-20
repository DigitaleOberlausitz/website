import React from "react"

import * as R from "ramda"
import { graphql, Link } from "gatsby"

import moment from "moment"

import Layout from "../components/layout"

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
        <p>
          <a href={{link}}>Link zum Vortrag</a>
        </p>
      </header>
      <div dangerouslySetInnerHTML={{__html: description}}/>
    </article>
  )
}

export default ({ data }) => {
  const events = data.events ? data.events.edges.map(edge => edge.node).map(node => ({
    date: node.frontmatter.date,
    type: "defaultEvent",
    node: node,
  })) : []
  const jugEvents = data.jugEvents ? data.jugEvents.edges.map(edge => edge.node).map(node => ({
    date: node.date,
    type: "jugEvent",
    node: node,
  })) : []

  const allEvents = R.reverse(R.sortBy(eventNode => eventNode.date)([...events, ...jugEvents]))

  return (
    <Layout>
      {allEvents.map((event, i) => {
        switch(event.type) {
          case "defaultEvent": return <DefaultEvent key={i} event={event.node}/>
          case "jugEvent": return <JugEvent key={i} event={event.node}/>
          default: return null
        }
      })}
    </Layout>
  )
}

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
