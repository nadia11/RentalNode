var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Userss pageee');
});
router.get('/new', function(req, res, next) {
  res.send('new User page');
});

module.exports = router;
