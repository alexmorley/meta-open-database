var express = require('express');
var router = express.Router();
var middle = require('../middle.js');
var jsonminify = require('jsonminify');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Meta Open DB' });
});

/* Create new entry */
fs.readFile('public/db_schema.json', 'utf8', function (err, data) {
  let fields = JSON.parse(jsonminify(data));
  router.get('/add', middle.requiresLogin, function(req, res, next) {
    res.render('add', {
      fields: fields, 
      helpers: {
        ifObject: function(item, options) {
          if(!(item.longname)) {
            return options.fn(this);
          } else {
            return options.inverse(this);
          }
        }
      }});
  });
});

module.exports = router;
