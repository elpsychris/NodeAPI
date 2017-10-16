var express = require('express');
var router = express.Router();
// var querystring = require('querystring')
var api = require("../api/fetchAPI")
const host = "192.168.110.190"
const port = "9090"

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }))
/* GET home page. */
router.post('/iTradeMAS/:action', function(req, res, next) {
  console.log("INCOMING ", req.url)
  console.log("BODY - ALL  ",req.body)
  var response = api.FetchAPI(req.params.action,req.body, "POST")
  .then(response => response).then(parseData => {
    res.json(parseData)
  })
  
  
});

module.exports = router;
