let mongoose = require('mongoose');
let request = require('request');
let User = mongoose.model('User');
module.exports = {
  addSong: (req, res)=>{
    User.findOne({_id:req.session.user}, (err, user)=>{
      user.songList.push(req.body.song);
      user.save((err)=>{
        if(err){
          console.log(err);
        }else{
          res.status(200).send();
        }
      })
    })
  },
  getSongs: (req, res)=>{
    User.findOne({_id:req.session.user}, (err, user)=>{
      console.log(user.songList);
      res.json(user.songList)
    })
  }
}
