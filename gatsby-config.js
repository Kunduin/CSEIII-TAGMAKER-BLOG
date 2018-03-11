module.exports = {
  siteMetadata: {
    title: `TAGMAKER`
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": "AuthorYaml"
  },
  plugins: [
    "gatsby-transformer-authors-yaml",
    `gatsby-transformer-yaml`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-glamor`,
    `gatsby-plugin-react-next`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#1890ff`,
        // Disable the loading spinner.
        showSpinner: false
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "packages",
        path: `./content/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `./src/`
      }
    },
    // `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // {
          //   resolve: `gatsby-remark-images`,
          //   options: {
          //     maxWidth: 800
          //   }
          // },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-smartypants`,
          "gatsby-remark-copy-linked-files"
        ]
      }
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true
      }
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        theme: {
          "avatar-size-base": `40px`,
          "avatar-size-lg": "80px",
          "layout-body-background": `rgba(241, 242, 255, 0.05098039)`,
          "menu-bg":"rgb(244, 245, 247)",
          "menu-item-active-bg":"transparent"
        }
      }
    }
  ]
};
