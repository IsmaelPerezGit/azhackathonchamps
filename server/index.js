const express = require('express');
const app = express();
var path = require('path')
var bodyParser = require('body-parser');
var session = require('express-session');

var sessionConfig = {
  secret: 'fdljafsjldf',
  resave: false,
  saveUninitialized: true,
  name: 'partyUpCOokie',
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 5000000
  }
}

app.use(session(sessionConfig))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.text());
app.use(express.static(path.join(__dirname, "client", "static")))



require('./services/loadModels.js');
require('./services/routes.js')(app);

app.listen(5800, ()=>{
  console.log("sup we on 5800.");
})
