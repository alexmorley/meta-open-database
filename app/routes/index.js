var express = require('express');
var router = express.Router();
var middle = require('../middle.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Meta Open DB' });
});

/* Create new entry */
router.get('/add', middle.requiresLogin, function(req, res, next) {
  res.render('add', {});
});



/* login */
/*router.get('/login', function(req, res, next) {
  res.render('login', { } );
})*/

module.exports = router;
