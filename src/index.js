import React from 'react'
import { hydrate, render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'

import App from './App'
import theme from './global/theme'
import sig from './global/sig'

process.env.NODE_ENV === 'production' && console.log(sig)

if (typeof window !== 'undefined') {
  const appElement = document.getElementById('root')
  const content = (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App
          data={window.WORDPRESS_DATA}
          menu={window.WORDPRESS_MENU}
          pages={window.WORDPRESS_PAGES}
        />
      </BrowserRouter>
    </ThemeProvider>
  )
  if (process.env.NODE_ENV === 'development' && appElement) {
    render(content, appElement)
  } else if (appElement) {
    hydrate(content, appElement)
  }
} else {
}
