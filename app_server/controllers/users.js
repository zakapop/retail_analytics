//listUsers function sends list of users to render page
exports.listUsers = function(req, res){
  console.log('Attempting to list users...');
  var db = req.db;
  var collection = db.get('usercollection');
  var cLength = collection.length;
  if (cLength === 0){console.log('No users found');}
  else {console.log(cLength + ' users found');}

  console.log("Rendering users");
  collection.find({},{},function(e,docs){
    res.render('userlist', {
      "userlist": docs
    });
  });
}
