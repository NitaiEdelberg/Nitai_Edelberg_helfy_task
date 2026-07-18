//didn't find a reeal reason to use middleware as we don't have users needing to log in
//and auth, but added a logger to show that i do know what is a middleware and how to use it.

function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

module.exports = logger;