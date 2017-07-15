let users = require('../controllers/users.js')
module.exports = (app)=>{
  app.post('/users', users.create);
  app.get('/users', users.viewAll);
  // app.use(authentication);
}
function authentication(req, res, next){
  if(req.session.user){
    next()
  } else{
    res.status(401).send("Permission denied")
  }
}
