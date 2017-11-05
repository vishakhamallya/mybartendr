var express = require('express');
var router = express.Router();

/* GET recipes. */
router.get('/', function(req, res, next) {
    res.render('recipes', { name: 'recipes' });
});

module.exports = router;