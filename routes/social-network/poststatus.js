var express = require('express');
var router = express.Router();
const Poststatus=require('../controller/poststatus')
/* GET home page. */
router.post('/poststatus', Poststatus.postStatus)

module.exports = router;