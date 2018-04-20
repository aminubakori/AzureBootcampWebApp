var express = require("express");
var app = express();

var apiService = require("./api.service")

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.get('/api', (req, res) => {
	res.json(apiService.getHome());
});

app.listen(process.env.PORT || 8081);
console.log("Server running on port 8081");