const mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost/instagram', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
},{
    collection:'user'
});
const Schema = mongoose.Schema;

 
const user1Schema = new Schema({
   username:String,
   password:String,
   name:String,
   Iduser:String,
   friends:Array
});



const User = mongoose.model('user',user1Schema);




module.exports=User;