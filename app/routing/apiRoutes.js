var friends = require('../data/friends.js');

module.exports = function (app) {
        // Your apiRoutes.js file should contain two routes:

        // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
        app.get('/api/friends', function (req, res) {
            console.log("WHERE ARE YOU?");
            res.json(friends)
        });


        // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
        app.post('/api/friends', function (req, res) {
                console.log("HERE I AM!");
                console.log(req.body);
                var userData = req.body;

                // Select the best match
                var bestMatch = {
                    name: "",
                    photo: "",
                    friendDifference: Infinity
                };
                // Results from the user's survey
                var userData = req.body;
                var userScores = userData.scores;
                // Calculate the difference between the user's score and the scores of the other users in the database
                var totalDifference;
                // Loop through all the possible friends
                for (var i = 0; i < friends.length; i++) {
                    var currentFriend = friends[i];
                    totalDifference = 0;

                    console.log(currentFriend.name);
                    // Loop through the scores of each possible friend
                    for (var j = 0; j < currentFriend.scores.length; j++) {
                        var currentFriendScore = currentFriend.scores[j];
                        var currentUserScore = userScores[j];
                        // Calculate the difference between the scores and sum them into totalDifference
                        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
                    }
                    console.log(totalDifference);
                    // If the sum of differences is less then the differences of the current "best match"
                    if (totalDifference <= bestMatch.friendDifference) {
                        console.log("New best friend!");
                        // Reset the bestMatch to be the new friend.
                        bestMatch.name = currentFriend.name;
                        bestMatch.photo = currentFriend.photo;
                        bestMatch.friendDifference = totalDifference;
                    }
                }
        // Saving the user's data to the database
        friends.push(userData);
        // Returning JSON with the user's best match
        res.json(bestMatch);
    });
            // for loop to iterate over friends array
            // in the for loop grab the current friend current friends = friends{i}
            // value to runningTotal = 0

            // nested for loop to run over the scores arrays in the friends for loop array
            // grab the current friends scrors an d save to a var
            // take that newUser and grab those scroes from the user data
            // Math.abs() make sure index is a number not a string parseInt save all this to runningTotal

            // out of the 2nd for loop but in the 1st for loop use bestMatch runningTotal <= bestMatch.total difference = true then friend is best match bestMatch.name= currentFriend.name

            // out of all for loops
            // push new user data to friends array
            // res.json best match back to user



        }