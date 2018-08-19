var friendsArray = require("../app/data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

  app.post('/api/friends', function(req, res) {
		var userInput = req.body;
		var userResponses = userInput.scores;
		var matchName = '';
		var matchImage = '';
		var totalDifference = 10000;
		for (var i = 0; i < friendsArray .length; i++) {

			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friendsArray [i].scores[j] - userResponses[j]);
			}
			if (diff < totalDifference) {
				totalDifference = diff;
				matchName = friendsArray [i].name;
				matchImage = friendsArray [i].photo;
			}
		}
		friendsArray .push(userInput);
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});


 
};
