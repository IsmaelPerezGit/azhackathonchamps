
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  name: {type:String, required:true},
  password: {type:String, required:true}//replace example as desired
})

mongoose.model('user', userSchema);
