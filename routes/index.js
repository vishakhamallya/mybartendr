var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.jade', { name: 'mybartendr' });
});

router.get('/recipes', function(req, res, next) {
    res.render('recipes.jade', { name: 'recipes' });
});

module.exports = router;
