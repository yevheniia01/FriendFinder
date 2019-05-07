var usersData = require('../data/friends');

module.exports = function(app) {
    // Return all friends found in friends.js as JSON
    app.get("/api/friends", function(req, res) {
      res.json(usersData);
    });
  
    app.post("/api/friends", function(req, res) {
      console.log(req.body.scores);
  
      // Receive user details (name, photo, scores)
      var user = req.body;
  
      // parseInt for scores
      for(var i = 0; i < user.scores.length; i++) {
        user.scores[i] = parseInt(user.scores[i]);
      }
  
      // default friend match is the first friend but result will be whoever has the minimum difference in scores
      var friendIndex = 0;
      var minDiffer = 40;
  
      // in this for-loop, start off with a zero difference and compare the user and the ith friend scores, one set at a time
      //  whatever the difference is, add to the total difference
      for(var i = 0; i < usersData.length; i++) {
        var totalDifference = 0;
        for(var j = 0; j < usersData[i].scores.length; j++) {
          var difference = Math.abs(user.scores[j] - usersData[i].scores[j]);
          totalDifference += difference;
        }
  
        // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
        if(totalDifference < minDiffer) {
          friendIndex = i;
          minDiffer = totalDifference;
        }
      }
  
      // after finding match, add user to friend array
      usersData.push(user);
  
      // send back to browser the best friend match
      res.json(usersData[friendIndex]);
    });
  };