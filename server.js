var express = require("express");

var app = express();
var PORT = procdss.env.PORT || 3002;

require("./routes/route.js");

app.use(express.static("public"));

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});