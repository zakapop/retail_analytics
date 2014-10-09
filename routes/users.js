var ctrl = require('../app_server/controllers/users');

module.exports = function(app){
  app.get('/users', ctrl.listUsers);
};
