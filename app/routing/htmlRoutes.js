// Dependencies
var path = require("path");
var express = require("express");

// Routing
module.exports = function(app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------
    app.use(express.static(path.join(__dirname, '../public')));
    // app.use('/public', express.static('public'));
    // app.use('/styles', express.static('/public/css'));
    // console.log(__dirname);
    // app.use('/styles', express.static(__dirname + '/app/public/css'));
  
    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
  
    // If no matching route is found default to home
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  };
  