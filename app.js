var moment = require('moment');
var express = require('express');

var app = express();


app.get('/', function(req, res){
    res.send('<html><head></head><body><h1>Hello world!</h1>' + moment().format("LLLL")  + '</body></html>');
    console.log(moment().format("dddd, hA"));
});

app.get('/api', function(req, res){
    res.json({
        firstname: 'Chris',
        lastname: 'Beard'
    });
})

var port = process.env.POST || 3000; // process is supplied by node core. If the server had an environment for PORT it would use it. If it's not set, it uses 3000.
app.listen(port); // listen is from express
