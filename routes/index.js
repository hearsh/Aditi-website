var express = require('express');
var router = express.Router();
const dataAccess = require('../components/dataAccess/index.js');
// site url: https://aditi-website.herokuapp.com'
const dirName = 'https://aditi-website.herokuapp.com';
/* GET home page. */
router.get('/', function(req, res, next) {
  const allData = dataAccess.getAllData();
  res.render('pages/index', {
    title: 'Gurkar Lab',
    results: allData,
    pages: dataAccess.getPages(),
    dirName
  });
});

/* GET Aditi page. */
router.get('/Aditi-Gurkar', function(req, res, next) {
  const allData = dataAccess.getAllData();
  res.render('pages/aditiGurkar', {
    title: 'Gurkar Lab | Aditi Gurkar',
    results: allData,
    pages: dataAccess.getPages(),
    dirName
  });
});

/* GET Publications page. */
router.get('/Publications', function(req, res, next) {
  const allData = dataAccess.getPublications();
  res.render('pages/publications', {
    title: 'Gurkar Lab | Publications',
    results: allData,
    pages: dataAccess.getPages(),
    dirName
  });
});

/* GET News page. */
router.get('/news', function(req, res, next) {
  const allData = dataAccess.getNews();
  console.log(allData);
  res.render('pages/labNews', {
    title: 'Gurkar Lab | News',
    results: allData,
    pages: dataAccess.getPages(),
    dirName
  });
});

/* GET Lab Fun page. */
router.get('/labfun', function(req, res, next) {
  dataAccess.getLabFun().then(allData => {
    res.render('pages/labFun', {
      title: 'Gurkar Lab | Lab Fun',
      results: allData,
      pages: dataAccess.getPages(),
      dirName
    });
  }).catch(err => {
    console.log(err);
    res.render('pages/labFun', {
      title: 'Gurkar Lab | Lab Fun',
      results: null,
      pages: dataAccess.getPages(),
      dirName
    });
  })
});

/* GET the team page. */
router.get('/our-team', function(req, res, next) {
  const results = dataAccess.getTeamData();
  try {
    res.render('pages/team', {
      title: 'Gurkar Lab | Our Team',
      pages: dataAccess.getPages(),
      results,
      dirName
    });
  } catch(err) {
    console.log(err);
  }
  
});

/* GET Research Interest page. */
router.get('/research-interests/:data', function(req, res, next) {
  let tab = req.params.data;
  const researchData = dataAccess.getReserachInterest(tab);
  try {
    res.render('pages/individualResearch', {
      title: 'Gurkar Lab | Research Intrest',
      tab,
      pages: dataAccess.getPages(),
      researchData,
      dirName
    });
  } catch(err) {
    console.log(err);
  }
  
});

/* GET Research Interest page. */
router.get('/research-interests', function(req, res, next) {
  const results = dataAccess.getAllResearch();
  try {
    res.render('pages/researchInterests', {
      title: 'Gurkar Lab | Research Interest',
      pages: dataAccess.getPages(),
      results,
      dirName
    });
  } catch(err){
    console.log(err)
  }
});

module.exports = router;
