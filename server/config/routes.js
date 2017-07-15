var controller = require('../controllers/controller.js');
module.exports = function(app){
}
function loginAuthentication(req,res,next){
  if(req.session.user){
    next();
  }else{
    res.status(401).send('user not logged in')
  }
}
