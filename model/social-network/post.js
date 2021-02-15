const mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost/instagram', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
},{
    collection:'post'
});
const Schema = mongoose.Schema;

 
const post5Schema = new Schema({
  poststatus:String,
  postuser:String,
  postId:String,
  postImage:String,
  time:Date
});
const User = mongoose.model('post',post5Schema);


module.exports=User;