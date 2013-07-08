var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

app.get('/', function(request, response) {
  var buff = fs.readFileSync("./index.html");
  var cnt = buff.toString("utf-8");  
  response.send(cnt);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
