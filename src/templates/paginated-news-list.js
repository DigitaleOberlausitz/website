import React from "react"
import { Link } from "gatsby"
import { Pagination, PaginationItem, PaginationLink } from "reactstrap"
import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons"

import * as R from "ramda"

import extractExcerpt from "../utils/extract-excerpt"

const PaginatedNewsList = ({ data, pageContext }) => {
  const { group, index, pageCount } = pageContext

  return (
    <Layout>
      <div>
        {group.map(({ node }) => {
          const {
            id,
            html,
            frontmatter: { title, date },
            fields: { slug },
          } = node
          return (
            <article key={id}>
              <header>
                <h1>{title}</h1>
                <strong>
                  <time dateTime={date}>{date}</time>
                </strong>
              </header>
              <div
                dangerouslySetInnerHTML={{
                  __html: extractExcerpt(html),
                }}
              />

              <Link to={slug}>more...</Link>
            </article>
          )
        })}

        <div>
          <Pagination aria-label="Page navigation">{generatePaginationItems({ pageCount, index })}</Pagination>
        </div>
      </div>
    </Layout>
  )
}

const generatePaginationItems = ({ pageCount, index }) => {
  const last = index === pageCount
  const first = index === 1

  // when on page 1 there is no previous
  // when on page 2 the previous is "/"
  // else it's "page" + the index of previous page
  const previousUrl = first ? undefined : index === 2 ? "/" : "/page/" + (index - 1)
  // when on last page there is no next
  const nextUrl = last ? undefined : "/page/" + (index + 1)

  const tagFunction = props => {
    if (props.to) {
      return <Link {...props} />
    } else {
      return <span {...props} />
    }
  }

  const paginationItems = R.range(1, pageCount + 1).map(i => {
    return (
      <PaginationItem key={i} disabled={i === index}>
        <PaginationLink aria-label={`navigate to page ${i}`} tag={tagFunction} to={i === 1 ? "/" : "/page/" + i}>
          {i}
        </PaginationLink>
      </PaginationItem>
    )
  })

  return [
    <PaginationItem key="prev" disabled={first}>
      <PaginationLink aria-label="navigate to previous page" tag={tagFunction} to={previousUrl}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </PaginationLink>
    </PaginationItem>,

    ...paginationItems,

    <PaginationItem key="next" disabled={last}>
      <PaginationLink aria-label="navigate to next page" tag={tagFunction} to={nextUrl}>
        <FontAwesomeIcon icon={faChevronRight} />
      </PaginationLink>
    </PaginationItem>,
  ]
}

export default PaginatedNewsList
