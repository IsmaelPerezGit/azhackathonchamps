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
        res.json(user)
      }
    })
  },
  login: (req, res)=>{
    User.findOne({email:req.body.email}, (err, user)=>{
      let test = user.comparePassword(req.body.password, (err, isMatch)=>{
        if(isMatch){
          res.json(user)
        }else{
          res.status(401).send();
        }
      });
    })
  },
  connect:(req, res)=>{
    var client_id = '00bf6bca0ae741bd9f94f5474aa3c1f3'; // Your client id
    var client_secret = '824f504717264ac18b18671cb41541b3'; // Your secret

    // your application requests authorization
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      form: {
        grant_type: 'client_credentials'
      },
      json: true
    };

    let searchArr = [
      "May it be", "Superbass", "Sit still look pretty", "make me", "toxic", "confetti", "scar tissue", "despacito", "wow", "on melancholy hill", "high and low",
      "Deadroses", "I'm so humble", "lord willin", "to the max", "fumes", "campfire song song", "the high road", "straight out of compton", "signs",
      "Welcome to the jungle", "come down", "game of thrones theme song", "im the one", "tongue tied", "camisa negra", "sun models", "it's strange", "white and nerdy", "the less i know the better", "call me maybe",
      "super mario world", "the middle of the world", "paula patton", "everybody", "stabat mater dolorosa", "fear.", "throw it all away", "44 bars", "roads"
    ];

    let selection = Math.floor(Math.random() * 39);
    console.log(selection);
    console.log(searchArr[selection])
    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        // use the access token to access the Spotify Web API
        var token = body.access_token;
        var options = {
          url: 'https://api.spotify.com/v1/search?type=track&q='+searchArr[selection],
          headers: {
            'Authorization': 'Bearer ' + token
          },
          json: true
        };
        request.get(options, function(error, response, body) {
          res.json(body.tracks.items[0]);
        });
      }
    })
  },
  logout: (req, res)=>{
    if(req.session.user){
      delete req.session.user
    }
    res.status(200).send();
  }

}
