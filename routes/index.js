module.exports = function(app){
  require('./main')(app);
  require('./users')(app);
  require('./locations')(app);
};
