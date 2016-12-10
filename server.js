var express = require ("express");
var app = express ();
var PORT = 3000;
// app.get("/", function(req,res){
//   res.send("Hello, Express!")
// });

var middleware ={
requireAuthentication: function(req,res,next){
console.log("private route hit!");
  next();
  },
  logger: function(req,res,next){

    console.log("Request: "+new Date().toString()+ " " +req.method+" "+ req.originalUrl);
    next();
  },

};
app.use(middleware.logger)
// app.use(middleware.requireAuthentication);

app.get("/about", function(req,res){
  res.send("About Us")
})

app.use(express.static(__dirname+"/public"));


app.listen(PORT, function(){
  console.log("Express Server started at port:"+ PORT+"!");
});
