var usersData = require('../data/friends.js');

function apiRoutes(app){
    app.get('/api/friends', function(req, res){
        res.json(friendsData)
    })

    app.post("/api/friends", function(req, res){
        var newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: []
        };
        var scoresArray = [];
        for(var i=0; i < req.body.scores.length; i++){
            scoresArray.push(parseInt(req.body.scores[i]))
        }
        newFriend.scores = scoresArray;


        var compareScoreArray = [];
        for(var i=0; i< friendsData.length; i++){
            var currentComparison = 0;
            for(var j=0; j <newFriend.scores.length; j++){
                currentComparison +=Math.abs(newFriend.scores[j] - friendsData[i].scores[j] )
            }
            compareScoreArray.push(currentComparison)
        }

        var match = 0;
        for(var i=1; i < compareScoreArray.length; i++){
            if(compareScoreArray[i]<=compareScoreArray[match]){
                match = i;
            }
        }
        var userMatch = friendsData[match];
        res.json(match)
        usersData.push(newFriend)
    })
}
module.exports=apiRoutes;