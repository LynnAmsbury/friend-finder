var friends = require('../data/friends.js');

module.exports = function(app) {
// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
app.get('/api/friends', function(req, res) {
res.json(friends)
});

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
app.post('/api/friends', function(req, res) {
    console.log(req.body);
    var userData = req.body;
    var bestMatch = {
        name: "",
        photo: "",
        totalDifference: Infinity
    }

var runningTotal = 
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












    res.send({content: req.body, message: 'Good job!'})
    
});

};

