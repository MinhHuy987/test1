var express = require('express');
var router = express.Router();
const authezation=require('../controller/authezation')
/* GET home page. */
router.post('/signup',authezation.postSignup) 
router.post('/login',authezation.postLogin)

module.exports = router;