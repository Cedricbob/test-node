var express = require('express')
var app = express()

const Port = 3000;

app.get('/', function (req, res) {
    res.send('Hello World')
})
app.get('/Test', function (req, res){
    res.send('page de test');
})

console.log("\x1b[33m%s\x1b[0m","Server start on localhost:" + Port);
app.listen(Port)