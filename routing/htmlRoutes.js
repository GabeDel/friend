// Dependencies

var express = require('express');
var path = require ('path');
// var bodyParser = require ('body-parser');

// Sets up Express Server

var app = express();
var PORT = process.env.PORT || 8080;

// Express Handle Data Parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var matches = [
    {
      routeName: "",
      name: "gabe",
      phoneNumber: "737292378",
      email: "gabe@gmail.com:",
      uniqueID: 235
    },
    {
      routeName: "",
      name: "mike",
      phoneNumber: "3858999",
      email: "mike@gmail.com",
      uniqueID: 8394
    },
    {
      routeName: "",
      name: "Brenda",
      phoneNumber: "930549394",
      email: "brenda@gmail.com",
      uniqueID: 8859
    }
   ];
// HTML Routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });