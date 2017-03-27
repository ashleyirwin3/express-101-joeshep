const { Router } = require('express')
const path = require('path')

const coffeeRouter = Router()

coffeeRouter.get('/coffee', (req, res, next) => {
  console.log('drinking some coffee')
  res.sendFile(path.join(__dirname, '../public', 'coffee.html'))
})

coffeeRouter.get('/toomuchcoffee', (req, res, next) => {
  console.log('you drank too much coffee')
  res.send(`<h3>Drink Coffee</h3><form method="POST"><input type="text"><button type="submit">Wooo!</button></form`)
})

coffeeRouter.post('/toomuchcoffee', (req, res, next) => {
  console.log('drinking coffee')
  res.send('OH NO!!!!!')
})

module.exports = coffeeRouter
