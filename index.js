var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Welcome' });
});

/* GET Sign up page. */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'SIGNUP' });

});
/* GET logged in page. */
router.get('/logged', function(req, res, next) {
  res.render('logged', { title: 'LOGGED' });
});






module.exports = router;
