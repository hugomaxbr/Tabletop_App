const express = require('express');
const route = express.Router();
const HomeController =require('./controllers/HomeController');

route.post('/', HomeController.create);

module.exports = route;