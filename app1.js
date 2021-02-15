var express=require('express');
var path=require('path');
const uploadFile=require('express-fileupload')
var app=express();
app.use(uploadFile());
app.get('/upload',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/test.html'));

})
app.post('/upload',(req,res)=>{
    if(req.files){
        console.log(req,files);
    }
})
app.listen(6000);