const express = require('express');
const controller = require('../controllers/Programacion.js');

const route = express.Router();

route.post('/', controller.index);

module.exports = route;

