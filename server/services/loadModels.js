var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');

mongoose.connect("mongodb://localhost/hackathon");

console.log('LOADING THE MODELS...');
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + 'mongodb://127.0.0.1:27017/hackathon');
});
var models_path = path.join(__dirname, '../models/')

fs.readdirSync(models_path).forEach(function(file){
  if (file.indexOf('.js')>-1){
    require(path.join(models_path, file));
  }
})
