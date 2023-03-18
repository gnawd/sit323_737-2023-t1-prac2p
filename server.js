var express = require('express')
var app = express()

app.get('/', function (req,res, next) {
    res.send("<h1>Hello World! This is a simple web server</h1>")
    console.log("[Server Activity:] " + Date(Date.now()));
    next();
})

app.listen(3000 , () => console.log("This server's port is 3000"));