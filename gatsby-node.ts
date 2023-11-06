import { CreateNodeArgs, CreatePagesArgs, GatsbyNode } from "gatsby"
import { createFilePath } from "gatsby-source-filesystem"
import createPaginatedPage from "gatsby-paginate"

import { createIcal } from "./src/utils/create-ical"

const path = require("path")

export const onCreateNode: GatsbyNode["onCreateNode"] = async (params) => {
  const { node, getNode, actions } = params
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent)

    createNodeField({
      node,
      name: "sourceName",
      value: fileNode.sourceInstanceName,
    })

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

const createSlug = ({
  node,
  getNode,
  actions,
  basePath,
  prefix,
}: Pick<CreateNodeArgs, "node" | "getNode" | "actions"> & { basePath: string; prefix?: string }) => {
  const { createNodeField } = actions

  const path = createFilePath({ node, getNode, basePath })

  createNodeField({
    node,
    name: "slug",
    value: prefix ? `/${prefix}${path}` : path,
  })
}

export const createPages: GatsbyNode["createPages"] = async ({ actions, graphql }): Promise<void> => {
  const createNewsPagesPromise = createNewsPages({ actions, graphql })
  const createEventPagesPromise = createEventPages({ actions, graphql })
  const createStaticPagesPromise = createStaticPages({ actions, graphql })

  await Promise.all([createNewsPagesPromise, createEventPagesPromise, createStaticPagesPromise])
}

const createNewsPages = async ({ actions, graphql }: Pick<CreatePagesArgs, "actions" | "graphql">) => {
  const { createPage } = actions

  const result = await graphql(`{
  allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    filter: {fields: {sourceName: {eq: "news"}}}
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
}`)

  const edges = (result.data as any).allMarkdownRemark.edges

  createPaginatedPage({
    edges: edges,
    createPage: createPage,
    pageTemplate: "src/templates/paginated-news-list.tsx",
    pageLength: 10,
    pathPrefix: "page",
    buildPath: (index, pathPrefix) => (index > 1 ? `${pathPrefix}/${index}` : "/"),
  })

  edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/news-page.tsx"),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

const createEventPages = async ({ actions, graphql }: Pick<CreatePagesArgs, "actions" | "graphql">) => {
  const { createPage } = actions
  const result = await graphql(`{
  allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    filter: {fields: {sourceName: {eq: "events"}}}
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
}`)

  const edges = (result.data as any).allMarkdownRemark.edges

  edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/event-page.tsx"),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

const createStaticPages = async ({ actions, graphql }: Pick<CreatePagesArgs, "actions" | "graphql">) => {
  const { createPage } = actions
  const result = await graphql(`
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
  `)

  const edges = (result.data as any).allMarkdownRemark.edges

  edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/static-page.tsx"),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

export const onPostBuild: GatsbyNode["onPostBuild"] = async ({ graphql }) => {
  await createChaostreffIcal({ graphql })
}

const createChaostreffIcal = async ({ graphql }) => {
  const icalFrontmatterName = "chaostreff-goerlitz"
  const icalTargetPath = "./public/projekte/chaostreff/chaostreff-goerlitz.ics"
  const icalUrl = "https://digitale-oberlausitz.eu/projekte/chaostreff"
  const icalName = "Chaostreff Görlitz"
  return createIcal({
    graphql,
    icalFrontmatterName,
    icalName,
    icalTargetPath,
    icalUrl,
  })
}
