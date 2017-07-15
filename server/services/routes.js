let users = require('../controllers/users.js')
module.exports = (app)=>{
  app.post('/users', users.create);
  app.post('/users/login', users.login);
  // app.use(authentication);
}
function authentication(req, res, next){
  if(req.session.user){
    next()
  } else{
    res.status(401).send("Permission denied")
  }
}
