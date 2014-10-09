var ctrl = require('../app_server/controllers/main');
var express = require('express');
var router = express.Router();

module.exports = function(app){
  app.get('/', ctrl.index);
};
