var express = require('express');
var path = require ('path');

// Sets up Express Server

var app = express();
var PORT = process.env.PORT || 8080;

// Express Handle Data Parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


var matches = [
    {
        name: "Steven",
        photo: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
        answers: [
        "2",
        "3",
        "5",
        "5",
        "1",
        "1",
        "2",
        "5",
        "4",
        "1"
        ]
    },
    {
        name: "Mike",
        photo: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
        answers: [
        "2",
        "3",
        "5",
        "5",
        "1",
        "1",
        "2",
        "5",
        "4",
        "1"
        ]
    },
    {
        name: "John",
        photo: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
        answers: [
        "2",
        "3",
        "5",
        "5",
        "1",
        "1",
        "2",
        "5",
        "4",
        "1"
        ]
    }
   ];
// Api Routes
app.get("/api/matches", function(req, res) {
    return res.json(matches);
});

app.get("/api/newMatches", function(req, res) {
    return res.json(newMatches);
});



// JSON Input - new reservations
app.post("/api/newMatches/", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newMatches = req.body;
 
     
      matches.push(newMatches);
      res.json(newMatches);
    
    });


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });