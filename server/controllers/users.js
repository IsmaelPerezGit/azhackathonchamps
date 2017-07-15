let mongoose = require('mongoose');
let request = require('request');
let User = mongoose.model('User');
module.exports = {
  create: (req, res)=>{
    console.log(req.body);
    let user = new User({email:req.body.email, password:req.body.password, songList:[]});
    user.save((err)=>{
      if(err){
        console.log(err);
      }else{
        console.log('user saved', user);
        res.status(200).send();
      }
    })
  },
  login: (req, res)=>{
    User.findOne({email:req.body.email}, (err, user)=>{
      let test = user.comparePassword(req.body.password, (err, isMatch)=>{
        if(isMatch){
          req.session.user = user._id;
          res.status(200).send();
        }else{
          res.status(401).send();
        }
      });
    })
  },
  logout: (req, res)=>{
    if(req.session.user){
      delete req.session.user
    }
    res.status(200).send();
  }

}
