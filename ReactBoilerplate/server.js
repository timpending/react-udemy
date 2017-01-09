var express = require('express');

//Create app
var app = express();

// Find file
app.use(express.static('public'));

// Start Server
app.listen(3000, function(){
  console.log('express server on port 3000');
})
