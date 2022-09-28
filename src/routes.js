const express = require('express');
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const routes = express.Router()

routes.get('/', (req, res) => res.render('index', { page: 'enter-room' }))
routes.get('/create-pass', (req, res) => res.render('index', { page: 'create-room' }))
    // routes.get('/room/:room', (req, res) => res.render('room'))
routes.get('/room/:room', RoomController.open)
routes.post('/enterroom', RoomController.enter)
    // Set controllers with routers type POST

// room
routes.post('/create-room', RoomController.create)

// question
routes.post('/question/create/:room', QuestionController.create)
routes.post('/room/:room/:question/:action', QuestionController.index)

module.exports = routes