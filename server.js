const express = require('express');
const compress = require('compression');
const path = require('path');
const app = express();

app.use(compress());
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(process.env.PORT || 8080);
console.log('app listenes on 8080');
