const { createFilePath } = require("gatsby-source-filesystem")
const createPaginatedPage = require("gatsby-paginate")

const path = require("path")
const slugify = require("slugify")

exports.onCreateNode = params => {
  const { node, getNode } = params

  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent)

    switch (fileNode.sourceInstanceName) {
      case "news": {
        createSlug({ ...params, basePath: "content/news", prefix: "news" })
        break
      }

      case "events": {
        createSlug({ ...params, basePath: "content/events", prefix: "events" })
        break
      }

      case "pages": {
        createSlug({ ...params, basePath: "content/pages" })
        break
      }
    }
  }
}

const createSlug = ({ node, getNode, actions, basePath, prefix }) => {
  const { createNodeField } = actions

  const path = createFilePath({ node, getNode, basePath })

  const slug = slugify(path, {
    lower: true,
  })

  createNodeField({
    node,
    name: "slug",
    value: prefix ? `/${prefix}/${slug}` : slug,
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const createNewsPagesPromise = createNewsPages({ createPage, graphql })
  const createStaticPagesPromise = createStaticPages({ createPage, graphql })

  return Promise.all([createNewsPagesPromise, createStaticPagesPromise])
}

const createNewsPages = ({ createPage, graphql }) => {
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fields: { sourceName: { eq: "news" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                date
              }
              html
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      const edges = result.data.allMarkdownRemark.edges

      createPaginatedPage({
        edges: edges,
        createPage: createPage,
        pageTemplate: "src/templates/paginated-news-list.js",
        pageLength: 10,
        pathPrefix: "page",
        buildPath: (index, pathPrefix) => (index > 1 ? `${pathPrefix}/${index}` : "/"),
      })

      edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve("./src/templates/news-page.js"),
          context: {
            slug: node.fields.slug,
          },
        })
      })

      resolve()
    })
  })
}

const createStaticPages = ({ createPage, graphql }) => {
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(filter: { fields: { sourceName: { eq: "pages" } } }) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      const edges = result.data.allMarkdownRemark.edges

      edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve("./src/templates/static-page.js"),
          context: {
            slug: node.fields.slug,
          },
        })
      })

      resolve()
    })
  })
}
