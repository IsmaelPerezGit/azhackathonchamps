var mongoose = require('mongoose');
var User = mongoose.model('user');
module.exports = {
  index: function(req,res){
    res.render('index')
  },

}
