var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var config = require('./config.json');
var profile = require('./controllers/profileCtrl');
var user = require('./controllers/userCtrl');

var app = express();
//
// var corsOptions = {
//   origin: 'http://127.0.0.1:' + 9000
// };

var sessionLogger = function (req, res, next) {
  console.log(req.session);
  next();
};

app.use(express.static('public'));

app.use(bodyParser.json());
// app.use(cors(corsOptions));
app.use(session({
  secret: config.sessionSecret,
  resave: true,
  saveUninitialized: true
}));

app.get('/test', sessionLogger, function (req, res, next) {
  res.json(req.session)
})

app.post('/api/login', user.login);
app.get('/api/profiles', sessionLogger, profile.sendFriends);

app.listen(config.port, function() {
  console.log('listening on port ' + config.port);
  console.log(__dirname);
});
