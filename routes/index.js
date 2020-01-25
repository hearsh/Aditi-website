var express = require('express');
var router = express.Router();
const dataAccess = require('../components/dataAccess/index.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  const allData = dataAccess.getAllData();
  res.render('pages/index', {
    title: 'Express',
    results: allData
  });
});

module.exports = router;
