var express = require('express');
var router = express.Router();
var middle = require('../middle.js');
var common = require('../common.js');

router.get('*', function(req, res, next) {
  // un-urlify software name
  // call db to get info
  // stringify json

  entry = JSON.stringify({ 
      test: "test"
    })

  res.render('entry', { entry : 
    entry
  });
});


module.exports = router;
