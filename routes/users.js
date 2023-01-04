var express = require('express');
var router = express.Router();
var users = require('../controllers/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  users.getAllUsers(req,res);
});
router.get('/:id', function(req, res, next) {
  users.getSingleUser(req,res);
});
router.delete('/', function(req, res, next) {
  users.deleteAllUsers(req,res);
});
router.delete('/:id', function(req, res, next) {
  users.deleteSingleUser(req,res);
});
router.post('/', function(req, res, next) {
  users.signUp(req,res);
});

module.exports = router;
