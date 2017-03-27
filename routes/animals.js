const { Router } = require('express')
const path = require('path')

const animalRouter = Router()

animalRouter.get('/monkeys', (req, res, next) => {
 console.log("dwlskksl")
 console.log(`This ran at ${req.requestedTime}`)
 res.sendFile(path.join(__dirname, '../public', 'monkeys.html'))
})

animalRouter.get('/chickens', (req, res, next) => {
  console.log('dfskflsdf')
  res.send('<h3>No chickens for you</h3><form method="POST"><input type="text"><button type="submit">push</button></form>')
})

// on a post, do these particular things on request
animalRouter.post('/chickens', (req, res, next) => {
  console.log('posting a form for chickens')
  res.send('nothing here but us chickens')
})

module.exports = animalRouter
