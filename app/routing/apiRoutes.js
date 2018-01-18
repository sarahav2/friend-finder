// Dependencies
// =============================================================
var path = require("path");
var bodyParser = require("body-parser");
// Sets up the Express app to handle data parsing
// Star Wars Characters (DATA)
// =============================================================
var surveyResults = [];

module.exports = function(app) {
  
//   // Search for Specific Character (or all characters) - provides JSON
//   app.get("/api/:characters?", function(req, res) {
//     var chosen = req.params.characters;
  
//     if (chosen) {
//       console.log(chosen);
  
//       for (var i = 0; i < characters.length; i++) {
//         if (chosen === characters[i].routeName) {
//           return res.json(characters[i]);
//         }
//       }
//       return res.json(false);
//     }
//     return res.json(characters);
//   });
  
//   // Create New Characters - takes in JSON input
//   app.post("/api/new", function(req, res) {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body-parser middleware
//     var newReservation = req.body;
//     // Using a RegEx Pattern to remove spaces from newCharacter
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  
//     console.log(newReservation);
  
//     reservations.push(newReservation);
  
//     res.json(newReservation);
//   });
}