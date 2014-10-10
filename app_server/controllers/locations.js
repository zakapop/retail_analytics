/* Get home page*/
module.exports.homeList = function(req, res){
  res.render('index', {title: 'Home'});
};

/* Get Location Info Page*/
module.exports.locationInfo = function(req, res){
  res.render('index', {title: 'Location info'})
};

/* Get add review page */
module.exports.addReview = function(req, res){
  res.render('index', {title: 'Add review'});
}