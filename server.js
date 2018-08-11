var express = require("express");
var exServer = express();
// set initial port
var PORT = process.env.PORT || 3000;
//import modules
require( './routes/htmlRoutes.js' )( exServer );
require( './routes/apiRoutes.js' )( exServer );
//---------- Server start listen ----------
exServer.listen( PORT, function() {
    console.log( 'App listening on PORT ' + PORT );
});