let users = require('../controllers/users.js')
let songs = require('../controllers/songs.js')
module.exports = (app)=>{
  app.post('/users', users.create);
  app.post('/users/login', users.login);
  app.use(authentication);
  app.post('/addsong', songs.addSong);
  app.get('/getsongs', songs.getSongs)
}
function authentication(req, res, next){
  if(req.session.user){
    next()
  } else{
    res.status(401).send("Permission denied")
  }
}
