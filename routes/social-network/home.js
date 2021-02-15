var express = require('express');
var router = express.Router();
const Home=require('../controller/home')
/* GET home page. */
router.get('/', Home.getHome)

module.exports = router;