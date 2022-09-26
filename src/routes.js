const express = require('express');

const routes = express.Router()

routes.get('/', (req, res) => res.render('index'))
routes.get('/room', (req, res) => res.render('room'))
routes.get('/create-pass', (req, res) => res.render('create-pass'))

module.exports = routes