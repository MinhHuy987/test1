var createError = require('http-errors');
var upload =require('express-fileupload')
var formidable = require('formidable');
const Nexmo=require('nexmo');
const nexmo=new Nexmo({
  apiKey: '208fd04b',
  apiSecret: '4rtYNzEzDKo7I8SU',
},{debug:true})
var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors=require('cors');
const fileUpload = require('express-fileupload');

// var indexRouter = require('./routes/index');

// var home=require('./routes/home');
// var allpost=require('./routes/allpost');

// var Protect=require('./routes/protect')
var app = express();
var server =require("http").createServer(app);
app.use(cors())
app.use(fileUpload())
var io=require('socket.io')(server,{
  cors:{
    origin:"http://localhost:3000",
    methods:["GET","POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

io.on("connection", (socket) => {
    
  socket.join('btnlike')
//  socket.on("sendata",data=>console.log(data))
//  socket.on("senddata",data=>{
//    io.to('allpost').emit("post",data)
//  })
 socket.on("like",data=>{
  
   io.to('btnlike').emit("showlike",data)
 })
});

// app.use('/', indexRouter);

// app.use('/home',home);
// app.use('/allpost',allpost);
// app.use(require('./routes/authezation'))
// app.use(require('./routes/poststatus'))
// app.get('/protect',Protect)
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'views/test.css'))
})
app.get('/testcss',(req,res)=>{
  res.render('abc');
})
app.get('/uploadFile',(req,res)=>{
  res.sendFile(path.join(__dirname,'views/test.html'))
});
app.post('/uploadFile',(req,res)=>{
 console.log(req.files.foo);
})
app.post('/',(req,res)=>{
  const from = 'Vonage APIs';
  console.log(req.body);
  let toNumber = req.body.number;
  let text = req.body.text;
  // send sms message
  // nexmo.message.sendSms(
  //   from, toNumber, text
  //   // (err, responseData) => {
  //   //   if (err) {
  //   //     console.log(err);
  //   //   } else {
  //   //     console.dir(responseData);
  //       // Optional: add socket.io -- will explain later
  //   //   }
  //   // }
  // );
  nexmo.verify.request({
    number: '84345973829',
    brand: 'Vonage',
    code_length: '4'
  }, (err, result) => {
    console.log(err ? err : result)
  });
})
app.get('/profile/:id',(req,res)=>{
  console.log(req.params.id)
  res.send("welcome to profile <3")
})
app.get('/test',(req,res)=>{
  res.send("welcome to test");
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

server.listen('7000',function(){
  console.log("server running in port 8000");
})

