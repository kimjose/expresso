var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', name: 'Kimjose' });
});
router.get('/users', function(req, res, next) {
  res.send('Hello there')
});

module.exports = router;
