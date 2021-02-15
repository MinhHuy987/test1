var express = require('express');
var router = express.Router();
var users=[{
  username:"user1@gmail.com",password:"123"
}]
/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body.username);
  console.log(req.body.password)
 if(users[0].username == req.body.username && users[0].password == req.body.password){
   
  res.status(200).send({
    message:"success",token:'abcdef'
  })
  
  
 }
 else{
  res.status(200).send({
    message:"invalid user"
  })
 }
 
});

module.exports = router;
