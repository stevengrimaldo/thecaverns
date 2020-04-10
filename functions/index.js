const { https } = require('firebase-functions')
const express = require('express')
const compression = require('compression')

// Routes
const index = require('./server/routes/index')
const universalLoader = require('./server/routes/universal')

// Middlewares
const errorHandler = require('./server/middlewares/error')
const wordpressApi = require('./server/middlewares/wordpressApi')

const app = express()

// GZip responses
app.use(compression())

// Middleware to get page data from Wordpress
app.use(wordpressApi)

// Intercept index route
app.use('/', index)

// Static assets
app.use(express.static('./build'))

// All other SSR routes
app.use('/', universalLoader)

// Show error page on all uncaught errors
app.use(errorHandler)

exports.nuxtssr = https.onRequest(app)
