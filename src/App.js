import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router'
import { Global } from '@emotion/core'
// import Loadable from 'react-loadable'

import globalStyles from './global'

import { Footer, Header } from './components'

import { About, Home, Packages, Questions } from './templates'

// const Loading = () => <div>Loading...</div>

// const AsyncAbout = Loadable({
//   loader: () => import('./templates/About'),
//   loading: Loading,
// })

// const AsyncHome = Loadable({
//   loader: () => import('./templates/Home'),
//   loading: Loading,
// })

// const AsyncPackages = Loadable({
//   loader: () => import('./templates/Packages'),
//   loading: Loading,
// })

// const AsyncQuestions = Loadable({
//   loader: () => import('./templates/Questions'),
//   loading: Loading,
// })

const App = ({ data }) => {
  const dataReady = data != null && Object.keys(data).length !== 0
  return (
    <Fragment>
      <Global styles={globalStyles} />
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={props => (dataReady ? <Home data={data} {...props} /> : null)}
        />
        <Route
          exact
          path="/about"
          render={props =>
            dataReady ? <About data={data} {...props} /> : null
          }
        />
        <Route
          exact
          path="/packages"
          render={props =>
            dataReady ? <Packages data={data} {...props} /> : null
          }
        />
        <Route
          exact
          path="/questions"
          render={props =>
            dataReady ? <Questions data={data} {...props} /> : null
          }
        />
      </Switch>
      <Footer />
    </Fragment>
  )
}

export default App
