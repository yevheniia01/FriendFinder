var usersData = require('../data/friends');

module.exports = function(app) {
    //return UserData from friends.js
    app.get("/api/friends", function(req, res) {
      res.json(usersData);
    });
  
    app.post("/api/friends", function(req, res) {
      console.log(req.body.scores);
        var user = req.body;
    //loop & parseInt scores
      for(var i = 0; i < user.scores.length; i++) {
        user.scores[i] = parseInt(user.scores[i]);
      }
    //first friend match  
      var friendIndex = 0;
      var minDiffer = 40;
  
      for(var i = 0; i < usersData.length; i++) {
        var totalDifference = 0;
        for(var j = 0; j < usersData[i].scores.length; j++) {
          var difference = Math.abs(user.scores[j] - usersData[i].scores[j]);
          totalDifference += difference;
        }
  
        if(totalDifference < minDiffer) {
          friendIndex = i;
          minDiffer = totalDifference;
        }
      }
  
      // add user to UserData Array
      usersData.push(user);

    //send user match back
      res.json(usersData[friendIndex]);
    });
  };