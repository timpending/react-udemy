var express = require('express');

//Create app
var app = express();
const PORT = process.env.PORT || 3000

app.use( function (req,res,next) {
  if (req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url)
  } else {
    next();
  }
})

// Find file
app.use(express.static('public'));

// Start Server
app.listen(PORT, function(){
  console.log('express server on port ' + PORT);
});
