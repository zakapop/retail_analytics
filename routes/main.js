var ctrl = require('../app_server/controllers/main');

module.exports = function(app){
  app.get('/', ctrl.about);
  app.get('/', ctrl.signin)
};
