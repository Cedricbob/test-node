var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})
app.get('/Test', function (req, res){
    res.send('page de test');
})

app.listen(3000)