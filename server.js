var express = require('express');
var stormpath = require('express-stormpath');
var mongojs = require('mongojs');
var mongoose = require('mongoose');

var databaseUrl = process.env.MONGOLAB_URI;
var collections = ['mainComments'];
var db = mongojs(databaseUrl, collections);

var utils = require("./js/utils.js");
var bodyParser = require('body-parser');

var app = express();
app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/'));
var jsonParser = bodyParser.json(); 
//parses request.body (undefined String) into a JSON object
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//sets up middleware for stormpath library
app.use(stormpath.init(app, 
	{
		apiKeyId: process.env.STORMPATH_API_KEY_ID,
		apiKeySecret: process.env.STORMPATH_API_KEY_SECRET,
		secretKey: process.env.STORMPATH_SECRET_KEY,
		application: process.env.STORMPATH_URL,
		website: true,
		//environment variables read from heroku config, once added to your heroku project
	}
));

var requireLogin = function(req, res, next){
    if(!req.user){
        res.redirect('/login');
    } else {
        next();
    }
};

app.get('/', requireLogin, function(req, res){
        res.send('Logged in.');
});

app.get('/profile', stormpath.loginRequired, function(req, res){
	//user must be logged in to see their profile details
	res.json(req.user);
});

// Retrieves comments from the database
app.get('/mainComments', function(req, res) {
	db.mainComments.find(function(err, docs) {
		res.json(docs);
	});
});

// Parses the body and creates a JSON object
app.post('/mainComments', jsonParser, function(req, res) {
	var svc = req.body;
	db.mainComments.insert(svc, function(err, doc) {
		res.json(doc);
	}); //inserts data into the database
});

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
});

app.listen(app.get('port'), function() {
    console.log('Running on port ', app.get('port'));
});
