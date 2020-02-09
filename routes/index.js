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

/* GET Lab Fun page. */
router.get('/labfun', function(req, res, next) {
  dataAccess.getLabFun().then(allData => {
    console.log(allData);
    res.render('pages/labFun', {
      title: 'Express',
      results: allData
    });
  }).catch(err => {
    console.log(err);
    res.render('pages/labFun', {
      title: 'Express',
      results: null
    });
  })
});

module.exports = router;
