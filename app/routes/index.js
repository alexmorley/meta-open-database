var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Meta Open DB' });
});

/* login */
/*router.get('/login', function(req, res, next) {
  res.render('login', { } );
})*/

module.exports = router;
