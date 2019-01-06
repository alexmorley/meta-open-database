"use strict"
var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var API = [
  {
    type: "GET",
    endpoint: "dump",
    params: [],
    paramsDefault: [],
    docString: "Dump database as JSON Array.",
    func: dump
  },{
    type: "GET",
    endpoint: "list",
    params: ["field"],
    paramsDefault: ["name"],
    docString: "List the names of all software entries",
    func: function(req, res, next) {
      res.send("Not Yet Implemented.");
    }
  },
  {
    type: "GET",
    endpoint: "find",
    params: ["selector", "fields", "options"],
    paramsDefault: ["{}", "name", "{}"],
    docString: `Query database. See <a href="https://mongodb.github.io/node-mongodb-native/api-generated/collection.html#find">MongoDBClient find API</a> for more info.`,
    func: find
    //function(req, res, next) {
    //  res.send("Not Yet Implemented.");
    //}
  }
]

function dump(req, res, next) {
  // Connection URL
  var url = 'mongodb://localhost:3001/test';
  // Use connect method to connect to the Server
  MongoClient.connect(url, {useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    db.db().collection('mod').find().toArray(function (err,count) {
      if(!(err)){
        res.send(count)
      } else {
        DefaultErrorHandler(err, req, res, next)
      }
    });
    db.close();
  });
}

function find(req, res, next) {
  // Connection URL
  var url = 'mongodb://localhost:3001/test';
  // Use connect method to connect to the Server
  MongoClient.connect(url, {useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    let fields = {name: 1}
    if(req.query.fields) {
      fields = JSON.parse(req.query.fields);
    }
    db.db().collection('mod').find({}, {fields: fields}).toArray(function (err,count) {
      if(!(err)){
        res.send(count)
      } else {
        DefaultErrorHandler(err, req, res, next)
      }
    });
    db.close();
  });
}


/* Register all endpoints */
API.forEach(function (el,i) {
  router[el.type.toLowerCase()](`/${el.endpoint}`, el.func);
});

/* Show API documentation when no endpoint given */
router.get('/', function(req, res, next) {
  let html = [];
  API.forEach(function (el,i) {
    var key = el.endpoint;
    if(el.params.length > 0) {
      var params = el.params.map((e,i,arr) => {
        let el_d = el.paramsDefault[i];
        return `${e}=${el_d}`
      }).join('&');
    } else {
      var params = "";
    }
    html.push(`<p>
      <b>${el.type}</b> 
      <i>/${key}?${params}</i>
      ${el.docString}
      </p>`);
  });
  
  res.render('api', {api : html.join('')});
});

/* Handle Errors */
function DefaultErrorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
}

module.exports = router;
