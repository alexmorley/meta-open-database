"use strict"
var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// Connection URL
const MONGO_URL = 'mongodb://127.0.0.1:3001/test';

var API = [
  {
    type: "GET",
    endpoint: "dump",
    params: [],
    paramsDefault: [],
    docString: "Dump database as JSON Array.",
    handler: dump
  },{
    type: "GET",
    endpoint: "list",
    params: ["field"],
    paramsDefault: ["name"],
    docString: "List the names of all software entries",
    handler: function(req, res, next) {
      res.send("Not Yet Implemented.");
    }
  },
  {
    type: "GET",
    endpoint: "find",
    params: ["selector", "fields", "options"],
    paramsDefault: ["{}", "name", "{}"],
    docString: `Query database. See <a href="https://mongodb.github.io/node-mongodb-native/api-generated/collection.html#find">MongoDBClient find API</a> for more info.`,
    handler: find_handler,
    func: find,
  },
  {
    type: "GET",
    endpoint: "search",
    params: ["term", "field"],
    paramsDefault: [null, "*"],
    docString: `Search db for values starting with $term in field $field. `,
    handler: search_handler,
    func: search
  },
  {
    type: "POST",
    endpoint: "insert",
    params: [],
    paramsDefault: [],
    docString: `Insert Entry into Database.`,
    handler: insert
  }
]

function checkDocument(doc) {
  if (!(doc.name)) {
    return Promise.reject(new Error('Needs a name.'))
  }
  // need other submit time checks go here (e.g. at least three fields filled in)
  // Plus sanitise any inputs if need be
  return Promise.resolve(doc)
}

function insert(req, res, next) {
  MongoClient.connect(MONGO_URL, {useNewUrlParser: true }, function(err, db) {
    assert.equal(null, err);
    let collection = db.db().collection('mod');
    checkDocument(req.body)
      .then(
        function resolve(data) {
          collection.insertOne(req.body)
        })
      .then(
        function resolve(data) {
          console.log("Success");
          if (req.body.fromForm) {
            res.redirect('/add/?success=true');
          } else {
            res.sendStatus(200);
          }
        })
      .catch(
        function reject(err) {
          console.log("Error");
          next(err);
        });
  });
}

function dump(req, res, next) {
  MongoClient.connect(MONGO_URL, {useNewUrlParser: true }, function(err, db) {
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

function find(fields, selector) {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(MONGO_URL, {useNewUrlParser: true }, function(err, db) {
      if(err) { reject(err); }
      let fields;
      if(fields) {
        fields = JSON.parse(fields);
      } else {
        fields = {_id: 0};
      }
      db.db().collection('mod').find(selector,
        {fields: fields}).toArray(function (err,count) {
          if(!(err)){
            resolve(count)
          } else {
            try {
              reject(err);
            } catch(err) {
              console.log(err);
            }
          }
        });
      db.close();
    });
  })
}

function find_handler(req, res, next) {
  find(req.query.fields, req.query.selector)
    .then(
      function resolve(count) {
      res.send(count);
    },
      function reject(err) {
        DefaultErrorHandler(err, req, res, next);
      }
    );
}

function search(term) {
  let field = "name";
  let selector = {name: {$regex: `^${term}`}};
  return find(field, selector)
}

function search_handler(req, res, next) {
  if(!(req.query.term)) {
    return res.send([]);
    /*DefaultErrorHandler(new Error("Search term required"),
      req, res, next);*/
  }
  if (!(req.query.field)) {
    req.query.field = "name";
  }
  req.query.selector = {};
  // TODO: Should be case insensitive.
  req.query.selector[req.query.field] = {$regex: `^${req.query.term}`};
  console.log(req.query.selector);
  find_handler(req, res, next);
}

/* Register all endpoints */
API.forEach(function (el,i) {
  router[el.type.toLowerCase()](`/${el.endpoint}`, el.handler);
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

module.exports.router = router;
module.exports.API = API;
