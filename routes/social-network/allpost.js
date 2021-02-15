var express = require('express');
var router = express.Router();
const Allpost=require('../controller/allpost')
/* GET home page. */
router.get('/',Allpost.getAllpost)

module.exports = router;