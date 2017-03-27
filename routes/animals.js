const { Router } = require('express')
const path = require('path')
const { newPage, submit } = require('../controllers/animalCtrl')

const animalRouter = Router()

animalRouter.get('/monkeys', (req, res, next) => {
 console.log("dwlskksl")
 console.log(`This ran at ${req.requestedTime}`)
 animal.newPage(req, res, null)
})

animalRouter.get('/chickens', newPage)

// on a post, do these particular things on request
animalRouter.post('/chickens', submit)

module.exports = animalRouter
