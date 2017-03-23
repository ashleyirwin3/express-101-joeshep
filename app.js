'use strict'
// use express as a web server
// serve up static files

const express = require('express')
const app = express()

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
// use app.get to assign new routes/tests if the path matches and exsiting static file
app.get('/monkeys', (req, res, next) => {
 console.log("dwlskksl")
 console.log(`This ran at ${req.requestedTime}`)
 res.sendFile(__dirname + '/public/monkeys.html')
})

app.get('/chickens', (req, res, next) => {
  console.log('dfskflsdf')
  res.send('<h3>No chickens for you</h3><form method="POST"><input type="text"><button type="submit">push</button></form>')
})

// on a post, do these particular things on request
app.post('/chickens', (req, res, next) => {
  console.log('posting a form for chickens')
})

app.use( (req, res) => {
  res.send('nope')
})
app.listen(3000, () => {
  console.log("Server listening on port 3000")
})
