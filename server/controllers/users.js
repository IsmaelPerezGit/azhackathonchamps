let mongoose = require('mongoose');
let request = require('request');
let User = mongoose.model('User');
let apiKey = "RGAPI-b36bb2fe-7731-42e5-9afb-5a320c8e7bfa";
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
  }
}
