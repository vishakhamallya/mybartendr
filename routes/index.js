var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
    res.render('index.jade', { name: 'mybartndr' });
});

router.get('/recipes', function(req, res){
    res.render('recipes.jade', { title: 'recipes' });
});

module.exports = router;
