"use strict"
var express = require('express');
var router = express.Router();
var docs = `
API Documentation

GET /list List the names of all software entries
GET /list?field=something List a different field of all software entries
`

var API = [
{
  type: "GET",
  endpoint: "list",
  params: "field",
  paramsDefault: "name",
  docString: "List the names of all software entries",
  func: function(req, res, next) {
    res.send("Not Yet Implemented.");
  }
},
{
  type: "GET",
  endpoint: "mongo",
  params: "",
  paramsDefault: "",
  docString: "Pass through request to MongoDB API",
  func: function(req, res, next) {
    res.send("Not Yet Implemented.");
  }
}
]

/* Register all endpoints */
API.forEach(function (el,i) {
  router[el.type.toLowerCase()](`/${el.endpoint}`, el.func);
});

/* Show API documentation when no endpoint given */
router.get('/', function(req, res, next) {
  res.write(`<h1>API Docs</h1>`);
  API.forEach(function (el,i) {
    var key = el.endpoint;
    console.log(key);
    // TODO: Support mutliple parameters (with defaults)
    res.write(`<p>
        <b>${el.type}</b> 
        <i>/${key}?${el.params}=${el.paramsDefault}</i>
        ${el.docString}
        </p>`);
  });
  res.end();
});


module.exports = router;
