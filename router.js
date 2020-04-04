const express = require('express');
const route = express.Router();
const day = require('./controllers/dayController');

route.get('/:month/:year', day.calculate);

module.exports = route;