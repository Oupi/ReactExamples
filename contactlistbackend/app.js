const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User = require('./backend/models/user');
const Router = require('./backend/contactRouter');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/contactlist', { useMongoClient: true });

let app = express();

app.use(bodyParser.json());

let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let loggedUsers = [];

// Login
app.post('/login', function (req, res) {
  let userName = req.body.userName;
  let passphrase = req.body.passphrase;

  if (userName.length > 0 && passphrase.length > 0) {
    User.findOne({ 'userName': userName }, function (err, item) {
      if (err) {
        console.log('No such user');
        res.status(403).json({ 'message': 'No such user or passphrase' });
      } else {
        if(item !== null){
          if(item.passphrase === passphrase){
            console.log('Right passphrase');
            let token = '';
            for(i = 0; i < 50; i++){
              let temp = Math.floor(Math.random()*20);
              token = token+abc[temp];
            }
            res.status(200).json({'token':token, 'message':'Success'});
            loggedUsers.push({'token':token});
          } else {
            console.log('Wrong passphrase');
            res.status(403).json({ 'message': 'No such user or passphrase' });
          }
        }else {
          console.log('No such user');
          res.status(403).json({ 'message': 'No such user or passphrase' });          
        }
      }
    });
  } else {
    console.log('Empty username or passphrase');
    res.status(403).json({ 'message': 'No such user or passphrase' });    
  }
});

// Register
app.post('/register', function(req, res){
  if(req.body.userName.length > 0 && req.body.passphrase.length > 0){
    let temp = new User({userName: req.body.userName, passphrase: req.body.passphrase});
    temp.save(function(err, item){
      if(err){
        console.log('Register user failed');
        res.status(409).json({'message':'Failure to register user'});
      } else{
        console.log('Register user successful');
        res.status(200).json({'message':'Succesful'});
      }
    });
  } else {
    res.status(409).json({'message':'Please enter username and passphrase'});
  }
});

// Logout
app.post('/logout', function(req, res){
  let token = req.body.token;
  for(let i = 0; i < loggedUsers.length; i++){
    if(loggedUsers[i].token === token){
      loggedUsers.splice(i, 1);
      res.status(200).json({'message':'Success'});
      return;
    }
  }
  res.status(404).json({'message':'Not found'});
});

app.use('/api', function(req,res,next){
  let token = req.headers.token;
  for(let i = 0; i < loggedUsers.length; i++){
    if(loggedUsers[i].token === token){
      next();
      return;
    }
  }
  res.status(403).json({'message':'Not allowed'});
});

app.use('/api', Router);

app.listen(3001);
console.log('Running in port 3001');