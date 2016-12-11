var express = require ("express");
var app = express ();
var PORT =process.env.PORT || 3000;
// app.get("/", function(req,res){
//   res.send("Hello, Express!")
// });
var middleware = require("./middleware.js")

app.use(middleware.logger)
// app.use(middleware.requireAuthentication);

app.get("/about", function(req,res){
  res.send("About Us!!")
})

app.use(express.static(__dirname+"/public"));


app.listen(PORT, function(){
  console.log("Express Server started at port:"+ PORT+"!");
});
