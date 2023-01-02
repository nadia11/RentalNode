var express = require('express');
var router = express.Router();
var products = require('../controllers/product')

/* GET users listing. */
router.get('/', function(req, res, next) {
  products.getAllProducts(req,res);
});
router.get('/:id', function(req, res, next) {
  products.getSingleProduct(req,res);
});
router.delete('/', function(req, res, next) {
  products.deleteAllproducts(req,res);
});
router.delete('/:id', function(req, res, next) {
  products.deleteSingleProduct(req,res);
});

module.exports = router;
