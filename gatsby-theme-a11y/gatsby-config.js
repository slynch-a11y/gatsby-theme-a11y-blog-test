module.exports = {
  siteMetadata: {
    title: `Gatsby A11y-Ready Blog`,
    author: `Sarah Lynch`,
    description: `An accessibility-ready Gatsby blog theme.`,
    // siteUrl: `url-for-demo-goes-here`,
    social: {
      twitter: `sarah_e_lynch`,
    },
  },
  plugins: [
      {
          resolve: "gatsby-source-filesystem",
          options: {
              path: "content/blog",
              name: `blog`
          }
      },
     `gatsby-transformer-remark`,
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
      {  
        resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,  
        options: {  
          fields: [`title`, `tags`, `html`],  
          resolvers: {  
            MarkdownRemark: {  
              title: node => node.frontmatter.title,  
              tags: node => node.frontmatter.tags,  
              html: node => node.internal.content,  
              slug: node => node.fields.slug
            },  
          },  
        },  
      },
    ],
  }
