let mongoose = require('mongoose');
let request = require('request');
let User = mongoose.model('User');
module.exports = {
  addSong: (req, res)=>{
    User.findOne({_id:req.body.id}, (err, user)=>{
      user.songList.push(req.body.songId);
      user.save((err)=>{
        if(err){
          console.log(err);
        }else{
          res.status(200).send();
        }
      })
    })
  }
}
