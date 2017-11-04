var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name: 'mybartendr' });
});

router.get('/', function(req, res, next){
  res.render('index', {name: 'YEET'});
});

module.exports = router;
