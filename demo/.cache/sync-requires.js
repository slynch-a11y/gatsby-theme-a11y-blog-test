const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("C:\\Users\\sl452\\Documents\\Gatsby\\themeJam\\gatsby-theme-a11y-blog\\demo\\src\\templates\\blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\sl452\\Documents\\Gatsby\\themeJam\\gatsby-theme-a11y-blog\\demo\\.cache\\dev-404-page.js")))
}

