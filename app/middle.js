module.exports = {
  requiresLogin: function requiresLogin(req, res, next) {
    if (req.session && req.session.userId) {
      console.log(req.session);
      return next();
    } else {
      var err = new Error('You must be logged in to view this page.');
      err.status = 401;
      return next(err);
    }
  }
}
