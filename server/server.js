var express = require('express');
var app = express();
var mysql = require('mysql');

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'server'
});

connection.connect();

app.get('/users', function(req, res){
	connection.query('SELECT * FROM user', function(err, rows) {
		// todo RESPONSE
		if (err === true ) {
			console.log(err);
			res.send( err );
		} else {
			console.log( rows );
			res.json( rows );
		}
	});
});

app.get('/token', function(req, res){
	connection.query('SELECT * FROM token', function(err, rows) {
		// todo RESPONSE
		if (err === true ) {
			console.log(err);
			res.send( err );
		} else {
			console.log( rows );
			res.json( rows );
		}
	});
});

app.get('/wishlist', function(req, res){
	connection.query('SELECT * FROM wishlist', function(err, rows) {
		// todo RESPONSE
		if (err === true ) {
			console.log(err);
			res.send( err );
		} else {
			console.log( rows );
			res.json( rows );
		}
	});
});

var server = app.listen(3000, function() {
	console.log('Listening on port %d', server.address().port);
});