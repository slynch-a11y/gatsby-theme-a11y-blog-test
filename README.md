# Gatsby Theme Jam Submission

This is a (work in progress!!!) accessibility-ready (and searchable) blog theme for the Gatsby Theme Jam Submission.

Things I learned more about while working on this: 
* Gatsby.js
* GraphQL
* npm publish
* Gatsby createPages and the Gatsby-source-filesystem plugin (includes a function to create slugs!)
* using markdown with Gatsby
* using Gatsby plugins
* CSS
* Typography.js
* Gatsby SEO and React-Helmet
* creating Gatsby themes!

## Installation (this is how it should work)

To use this theme in your Gatsby sites, follow these instructions:
(to install a Gatsby site: npm install gatsby react react-dom)

1.  Install the theme
    ```sh
    npm install --save @selynch/gatsby-theme-a11y
    ```

2.  Add the theme to your `gatsby-config.js`:
    ```js
    module.exports = {
      plugins: [
        '@selynch/gatsby-theme-a11y'
      ]
    }
    ```

3.  Start your site
    ```sh
    gatsby develop
    ```

## Submission Checklist

To ensure your Theme Jam submission [follows the rules](https://themejam.gatsbyjs.org/rules), use this checklist:

- [X] Use our [accessibility guide][a11y] to ensure your site meets our accessibility standards
- [X] Run a performance audit using [Lighthouse][X] and/or [WebPageTest][]
- [ ] Set up a live demo using [Netlify][X] or [GitHub Pages][]
- [X] Add installation documentation to the README
- [X] Update the `name` field in `package.json`
- [X] Update the `author` field in `package.json`
- [X] Update the `repository` field in `package.json`
- [X] Make sure the theme’s `keywords` in `package.json` include `gatsby`, `gatsby-theme`, and `gatsby-plugin`
- [X] Publish your theme to npm ([docs][npmpublish])
- [ ] Submit your theme at https://themejam.gatsbyjs.org

[a11y]: https://gatsbyjs.org/docs/making-your-site-accessible#how-to-improve-accessibility
[Lighthouse]: https://developers.google.com/web/tools/lighthouse/
[axe]: https://www.deque.com/axe/
[WebPageTest]: http://webpagetest.org/
[Netlify]: https://netlify.com
[GitHub Pages]: https://pages.github.com/
[npmpublish]: https://docs.npmjs.com/cli/publish
