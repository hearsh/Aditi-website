var express = require('express');
var router = express.Router();
const dataAccess = require('../components/dataAccess/index.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  const allData = dataAccess.getAllData();
  res.render('pages/index', {
    title: 'Gurkar Lab',
    results: allData
  });
});

/* GET Aditi page. */
router.get('/Aditi-Gurkar', function(req, res, next) {
  const allData = dataAccess.getAllData();
  res.render('pages/aditiGurkar', {
    title: 'Gurkar Lab | Aditi Gurkar',
    results: allData
  });
});

/* GET Publications page. */
router.get('/Publications', function(req, res, next) {
  const allData = dataAccess.getPublications();
  res.render('pages/publications', {
    title: 'Gurkar Lab | Publications',
    results: allData
  });
});

/* GET Research Interest page. */
router.get('/research-interests', function(req, res, next) {
  res.render('pages/researchInterests', {
    title: 'Gurkar Lab | Research Intrest',
  });
});

/* GET News page. */
router.get('/news', function(req, res, next) {
  const allData = dataAccess.getNews();
  console.log(allData);
  res.render('pages/labNews', {
    title: 'Gurkar Lab | News',
    results: allData
  });
});

/* GET Lab Fun page. */
router.get('/labfun', function(req, res, next) {
  dataAccess.getLabFun().then(allData => {
    res.render('pages/labFun', {
      title: 'Gurkar Lab | Lab Fun',
      results: allData
    });
  }).catch(err => {
    console.log(err);
    res.render('pages/labFun', {
      title: 'Gurkar Lab | Lab Fun',
      results: null
    });
  })
});

module.exports = router;
