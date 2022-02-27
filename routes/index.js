var express = require('express');
var router = express.Router();
const studentModel = require('../model/studentModel');
var db = require('../helpers/mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/student', function(req, res, next) {
  let sql = `SELECT * FROM student`;
    db.query(sql, function(err, data) {
        res.json(data);
    });   
})

module.exports = router;
