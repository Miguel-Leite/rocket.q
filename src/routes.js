const express = require('express');
const QuestionController = require('./controllers/QuestionController')

const routes = express.Router()

routes.get('/', (req, res) => res.render('index'))
routes.get('/room', (req, res) => res.render('room'))
routes.get('/create-pass', (req, res) => res.render('create-pass'))

// Set controllers
routes.post('/room/:room/:question/:action', QuestionController.index)

module.exports = routes