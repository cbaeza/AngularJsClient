var express = require('express');
var app = express();
var mysql = require('mysql');

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'idealo',
	database : 'server'
});

connection.connect();

app.get('/', function(req, res){
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

var server = app.listen(3000, function() {
	console.log('Listening on port %d', server.address().port);
});