module.exports = {
  siteMetadata: {
    title: "Digitale Oberlausitz e. V.",
    description: "Website des Vereins Digitale Oberlausitz e. V.",
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/content/images`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 600
            }
          }
        ]
      }
    },
    "gatsby-remark-source-name",
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-source-atom",
      options: {
        source: "https://www.jug-gr.de/atom.xml",
      }
    }
  ],
}
