
const User=require('../../model/social-network/user')
const jwt=require('jsonwebtoken');

exports.postSignup=(req,res)=>{

    console.log(req.body.username,req.body.password,req.body.name);
    User.findOne({
        username:req.body.username
    }).then(data=>{
        if(data){
            res.status(200).send("username already exist");
        }
        else{
            User.create({
                username:req.body.username,password:req.body.password,name:req.body.name
            })
        }
    }).catch(err=>{
        console.log(err)
    })
}
exports.postLogin=(req,res)=>{
    console.log(req.body.username,req.body.password)
    User.findOne({
        username:req.body.username,password:req.body.password
    }).then(user=>{
        if(user){
            var token=jwt.sign({_id:user.Iduser},'mk')

            res.status(200).send({
                message:"succes",token:token
            })
        }
        else{
            res.status(200).send({
                message:"error"
            })
        }
    }).catch(err=>console.log(err))
    // User.findOne({
    //     username:req.body.username
    // }).then(user=>{
    //     if(!user){
    //         res.status(200).send({
    //             message:"invalid username"
    //         })
    //     }
    //     else{
    //         User.findOne({
    //             password:req.body.password
    //         }).then(password=>{
    //             if(!password){
    //                 res.status(200).send({
    //                     message:"error password"
    //                 })
    //             }
    //             else{
    //                 res.status(200).send({
    //                     message:"success"
    //                 })
    //             }
    //         })
    //     }
    // }).catch(err=>{
    //     console.log(err)
    // })
}
