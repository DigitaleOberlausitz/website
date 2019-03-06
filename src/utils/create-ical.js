// node.js
const fs = require("fs")
const path = require("path")

const mkdirp = require("mkdirp")
const pify = require("pify")

const ical = require("ical-generator")

const moment = require("moment")

// turn classic FS api into promise-version
const writeFile = pify(fs.writeFile)

const publicPath = "./public"

const createIcal = ({ graphql, icalName, icalTargetPath }) => {
  return graphql(`
    {
      events: allMarkdownRemark(
    sort: {fields: [frontmatter___date], order:DESC}
    filter: {
    		fields: { 
          sourceName: { eq: "events"}
        }
      frontmatter: {
        ical: { eq: "${icalName}"}
      }
    }
  ) {
    edges {
      node {
        frontmatter {
          title
          ical
          location
          startTime
          endTime
          date
        }
        html
      }
    }
  }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const events = result.data.events.edges.map(edge => edge.node)

    const cal = ical({
      domain: "linux-stammtisch-goerlitz.digitale-oberlausitz.eu",
      name: "Linux-Stammtisch Görlitz",
      timezone: "Europe/Berlin",
    })

    events.forEach(event => {
      const { title, date, startTime, endTime, location } = event.frontmatter
      const html = event.html

      const start = createDate(date, startTime)
      const end = createDate(date, endTime)

      cal.createEvent({
        start,
        end,
        summary: title,
        htmlDescription: html,
        location,
      })
    })

    return writeIcalFile(cal.toString(), icalTargetPath)
  })
}

const writeIcalFile = (content, icalTargetPath) => {
  const outputDir = path.dirname(icalTargetPath)

  if (!fs.existsSync(outputDir)) {
    mkdirp.sync(outputDir)
  }

  return writeFile(icalTargetPath, content)
}

const createDate = (date, time) => {
  return moment(`${date} ${time}`, "YYYY-MM-DD HH:mm")
}

module.exports = { createIcal, createDate }
