var express = require('express');
var mongojs = require('mongojs');

var databaseUrl = 'database';
var collections = ['mainComments'];
var db = mongojs(databaseUrl, collections);
//session for log in 
var session = require('express-session');
//utils for log in 
var utils = require("./js/utils.js");

var app = express();
app.set('port', (process.env.PORT || 5000));

var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/'));
var jsonParser = bodyParser.json(); 
//parses request.body (undefined String) into a JSON object
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Retrieves comments from the database
app.get('/mainComments', function(req, res) {
	db.mainComments.find(function(err, docs) {
		res.json(docs);
	})
});

// Parses the body and creates a JSON object
app.post('/mainComments', jsonParser, function(req, res) {
	var svc = req.body;
	db.mainComments.insert(svc, function(err, doc) {
		res.json(doc);
	}); //inserts data into the database
})

// Retrieves specific id from the database
app.get('/mainComments/:id', function(req, res) {
	var id = req.params.id;
	db.mainComments.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	});
});

// Deletes comment object with a specific id
app.delete('/mainComments/:id', function(req, res) {
	var id = req.params.id;
	console.log('user ', id);
	db.mainComments.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {
		res.json(doc);
	})
})

app.listen(3000);
app.listen(app.get('port'), function() {
 console.log('Running on port ', app.get('port'));
});
