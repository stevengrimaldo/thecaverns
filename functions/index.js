const functions = require('firebase-functions')
const express = require('express')
const { Nuxt } = require('nuxt')

const app = express()

const config = {
  dev: false,
  buildDir: 'nuxt',
  build: {
    publicPath: '/'
  }
}
const nuxt = new Nuxt(config)

function handleRequest(req, res) {
  res.set('Cache-Control', 'public, max-age=150, s-maxage=300')
  nuxt
    .renderRoute('/')
    .then(result => res.send(result.html))
    .catch(error => {
      console.log(error)
      res.send(error)
    })
}

app.get('*', handleRequest)
exports.nuxtssr = functions.https.onRequest(app)
