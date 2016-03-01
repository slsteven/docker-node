var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/sayhello', function(req, res, next) {
  res.send({ first_name: 'Steven', last_name: 'Lam'});
});

module.exports = router;
