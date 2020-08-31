var express = require('express');
var router = express.Router();
var user = require('../helper/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/chat/:room', function(req, res, next) {
  var room = req.params.room;
  res.render('chat' , {users : user.getUsersRoom(room) , room : room});
});


module.exports = router;
