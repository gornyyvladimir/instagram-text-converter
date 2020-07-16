/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: "/gatsby-instagram-text-converter",
  siteMetadata: {
    title: `Как сделать абзац в инстаграм?`,
    description: `Не знаете как сделать абзац в инстаграм? Этот онлайн инструмент обязательно вам поможет.`,
    author: `gornyyvladimir`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Oswald`,
            subsets: [`latin`],
          },
          {
            family: `Roboto`,
            variants: [`300`, `400`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Instagram text converter`,
        short_name: `Instagram text converter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/assets/icons/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
};
