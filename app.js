'use strict'
// use express as a web server
// serve up static files
require('dotenv').config()
const express = require('express')
const app = express()

// routes modules
const routes = require('./routes/')


// basic express apps include routes, routing, middleware(functions)

// example of middleware function
const requestTime = (req, res, next) => {
  req.requestedTime = Date.now() // middleware functions have access to things passed in the other function
  next()
}

// // tells express to use a middleware function, pass in middleware function
// app.use(requestTime) // runs requestTime with browser refresh

// express.static tells express what to look for and use as root of project
app.use(express.static(__dirname + '/public'))

app.use(requestTime)

app.use(routes)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server listening on ${port}`)
})
