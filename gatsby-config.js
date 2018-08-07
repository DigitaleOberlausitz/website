module.exports = {
  siteMetadata: {
    title: "Digitale Oberlausitz e.V.",
    description: "Webseite des Vereins Digitale Oberlausitz e.V.",
    siteUrl: "https://digitale-oberlausitz.eu",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "news",
        path: `${__dirname}/content/news`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "events",
        path: `${__dirname}/content/events`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/content/pages`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-remark-source-name",
    "gatsby-plugin-catch-links",
  ],
}
