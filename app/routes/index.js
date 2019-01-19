var express = require('express');
var router = express.Router();
var middle = require('../middle.js');
var common = require('../common.js');
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
    let post_status;
    if (req.query.success) {
      post_status = "Entry Successfully Added";
    } else {
      post_status = ""
    }
    console.log(req.body);
    res.render('add', {
      fields: fields, 
      helpers: {
        ifObject: common.ifObject 
      },
      post_status: post_status
    });
  });
});

module.exports = router;
