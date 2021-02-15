const jwt=require('jsonwebtoken');
const User=require('../../model/social-network/user')
exports.getHome=(req,res)=>{
    var token=req.header("Authorization");
    myId=jwt.verify(token,'mk');
    User.findOne({
        Iduser:myId._id
    }).then(data=>{
        console.log(data.friends);
            res.status(200).send({
                message:data,friends:data.friends
            })
    }).catch(err=>console.log(err))
}