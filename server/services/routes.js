let users = require('../controllers/users.js')
let songs = require('../controllers/songs.js')
module.exports = (app)=>{
  app.post('/users', users.create);
  app.post('/songs', songs.addSong);
}
function authentication(req, res, next){
  if(req.session.user){
    next()
  } else{
    res.status(401).send("Permission denied")
  }
}
