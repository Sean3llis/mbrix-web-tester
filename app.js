var express = require('express');
var app = express();
var port = process.env.PORT || 7777;

app.get('/', function(req, res) {
  console.log('req ~~>', req);
  res.send('lolz');
})

app.listen(port, function() {
  console.log('running on port', port);
})
