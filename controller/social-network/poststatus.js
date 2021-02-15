const Post=require('../../model/social-network/post')

exports.postStatus=(req,res)=>{
    console.log(req.body.userpost,req.body.idpost)
   
Post.create({
    poststatus:req.body.postcomment,postuser:req.body.userpost,postId:req.body.idpost,
  time:Date.now()
    // "đã đăng vào lúc " +" "+ today.getHours()+":"+today.getMinutes()+":"
    // +today.getSeconds() +" " +"ngày" +" " + today.toLocaleDateString()
}).then(data=>{
    res.status(200).send("post success")
}).catch(err=>console.log(err))

}