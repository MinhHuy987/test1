
const Post=require('../../model/social-network/post')
exports.getAllpost=(req,res)=>{

    Post.find({}).then(data=>{
        res.status(200).send({
            message:data
        })
    }).catch(err=>console.log(err))
}
