const { Router } = require('express')
const path = require('path')

const bookRouter = Router()

bookRouter.get('/books', (req, res, next) => {
  console.log('books!')
  res.sendFile(path.join(__dirname, '../public', 'books.html'))
})

bookRouter.get('/bestbooks', (req, res, next) => {
  console.log('these books are great')
  res.send(`<h3>Search for Book</h3><form method="POST"><input type="text"><button type="submit">push</button></form`)
})

bookRouter.post('/bestbooks', (req, res, next) => {
  console.log('submitting form for books')
  res.send('READ ME')
})

module.exports = bookRouter
