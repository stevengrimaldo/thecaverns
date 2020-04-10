import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { renderString } from 'template-file'
import { renderStylesToString } from 'emotion-server'
import { ThemeProvider } from 'emotion-theming'
import Helmet from 'react-helmet'

import App from '../../src/App'
import template from '../templates'
import theme from '../../src/global/theme'
import manifest from '../../build/asset-manifest.json'

module.exports = (req, res) => {
  const context = {}

  if (context.url) {
    // Redirect if need be
    return res.redirect(301, context.url)
  } else {
    try {
      const pageUrl = req.url
      const pageData = req.pageData
      const menu = req.menu

      const body = renderStylesToString(
        renderToString(
          <ThemeProvider theme={theme}>
            <StaticRouter location={pageUrl} context={context}>
              <App data={pageData} menu={menu} />
            </StaticRouter>
          </ThemeProvider>
        )
      )

      const scripts = Object.values(manifest)
        .filter(key => !key.includes('.map'))
        .filter(
          path =>
            /\.js$/.test(path) && !/precache-manifest|service-worker/.test(path)
        )
        .map(path => `<script src="${path}"></script>`)
        .join('')

      // We need to tell Helmet to compute the right meta tags, title, and such
      const {
        bodyAttributes,
        htmlAttributes,
        link,
        meta,
        title,
      } = Helmet.renderStatic()

      const data = {
        body,
        bodyAttributes: bodyAttributes.toString(),
        data: JSON.stringify(pageData),
        htmlAttributes: htmlAttributes.toString(),
        link: link.toString(),
        menu: JSON.stringify(menu),
        meta: meta.toString(),
        scripts,
        title: title.toString(),
      }

      // Pass all this nonsense into our HTML formatting function above
      const RenderedApp = renderString(template, data)

      // We have all the final HTML, let's send it to the user already!
      return res.send(RenderedApp)
    } catch (error) {
      console.error(error)
      res.send(error)
    }
  }
}
