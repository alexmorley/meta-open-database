var mongoose = require('mongoose');
var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();

var db = mongoose.connect('mongodb://localhost:3001/users');

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  }
});
UserSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash){
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});
UserSchema.statics.authenticate = function (userData, callback) {
  let {email, password} = userData;
  User.findOne({ email: email })
    .exec(function (err, user) {
      if (err) {
        return callback(err)
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          return callback(null, user);
        } else {
          return callback();
        }
      })
    });
}


var User = mongoose.model('User', UserSchema);

router.get('/register', function (req, res, next) {
  res.render('register', {reason: 'Sign Up'});
});

router.get('/login', function (req, res, next) {
  res.render('login', {reason: 'Sign In'});
});

function checkRegister(body) {
  if (!(body.email &&
    body.password &&
    body.passwordConf)) {
    return { ok: false, 
      reason: 'Woops it looks like you didn\'t fill in all the fields!'
    }
  }
  if (!(body.password === body.passwordConf)) {
    return {ok: false,
      reason: 'Woops it looks like those passwords don\'t match!'}
  }
  return {ok: true, reason: null}
};

router.post('/register', function (req, res, next) {
  let check_result = checkRegister(req.body);
  if (check_result.ok === true) {
    var userData = {
      email: escape(req.body.email),
      password: escape(req.body.password),
    }

    //use schema.create to insert data into the db
    User.create(userData, function (err, user) {
      if (err) {
        return next(err)
      } else {
        return res.redirect('/');
      }
    });
  } else {
    res.render('register', check_result);
  }
});

function checkLogin(body) {
  if (!(body.email &&
    body.password)) {
    return { ok: false, 
      reason: 'Woops it looks like you didn\'t fill in all the fields!'
    }
  }
  return {ok: true, reason:null}
}

router.post('/login', function (req, res, next) {
  let check_result = checkLogin(req.body);
  if (check_result.ok === true) {
    var userData = {
      email: escape(req.body.email),
      password: escape(req.body.password),
    }
    User.authenticate(userData, function (error, user) {
      if (error || !user) {
        res.render('login', {reason: 'Wrong email or password.'});
      } else {
        req.session.userId = user._id;
        return res.redirect('/');
      }
    });

  } else {
    res.render('login', check_result);
  }
});

module.exports = router;
