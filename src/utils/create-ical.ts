// node.js
import * as fs from "fs"
import * as path from "path"
import * as mkdirp from "mkdirp"

import ical from "ical-generator"

import { DateTime } from "luxon"

type FrontmatterDate = `${number}-${number}-${number}`
type FrontmatterTime = `${number}:${number}`

type Frontmatter = {
  title: string
  date: FrontmatterDate
  ical: string
  location: string
  startTime: FrontmatterTime
  endTime: FrontmatterTime
}

type EventNode = {
  frontmatter: Frontmatter
  html: string
  excerpt: string
}

export const createIcal = ({ graphql, icalName, icalTargetPath }) => {
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
        excerpt
      }
    }
  }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const events: Array<EventNode> = result.data.events.edges.map((edge) => edge.node)

    const cal = ical({
      url: "linux-stammtisch-goerlitz.digitale-oberlausitz.eu",
      name: "Linux-Stammtisch Görlitz",
      timezone: "Europe/Berlin",
    })

    events.forEach((event) => {
      const { title, date, startTime, endTime, location } = event.frontmatter
      const html: string = event.html
      const excerpt: string = event.excerpt

      const start = createDate(date, startTime)
      const end = createDate(date, endTime)

      cal.createEvent({
        start,
        end,
        summary: title,
        description: {
          plain: excerpt,
          html,
        },
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

  return fs.promises.writeFile(icalTargetPath, content)
}

export const createDate = (date: FrontmatterDate, time: FrontmatterTime): Date => {
  const iso = `${date}T${time}`
  return DateTime.fromISO(iso).toJSDate()
}
