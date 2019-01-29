var express = require('express');
var router = express.Router();
var middle = require('../middle.js');
var common = require('../common.js');
var API = require('./api.js').API;

router.get('*', function(req, res, next) {
  // un-urlify software name
  // call db to get info
  // stringify json
  let name = unurlify(req.path.slice(1,req.path.length))
  let search = getFromApi('search').func;
  req.query.term = name;
  search(name)
    .then(
      function resolve(data) {
        res.render('entry', {
          entry_str : JSON.stringify(data[0], null, "  "),
          entry : data[0]
        });

      })
});

function unurlify(string) {
  return string.trim().replace(/%20/g, ' ');
}

function getFromApi(endpoint) {
  return API.find((el, i, arr) => {
    console.log(el.endpoint === endpoint);
    return el.endpoint === endpoint
  });
}

module.exports = router;
