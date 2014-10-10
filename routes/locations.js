var ctrl = require('../app_server/controllers/locations');

module.exports = function(app){
  app.get('/', ctrl.homeList);
  app.get('/locations', ctrl.locationInfo);
  app.get('/locations/review/new', ctrl.addReview)
};