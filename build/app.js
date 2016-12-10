var express = require('express');
var fs = require('fs');
var ejs = require('ejs');
var app = express();


app.use(express.static('public'));
app.set("view engine", "ejs")



app.get("/", function(req, res) {
	var json = fs.readFileSync("../src/themoviedb_data.json");
	var content = JSON.parse(json);
	var template = fs.readFileSync("./public/template.ejs", "utf8");
	var rendered = ejs.render(template, {content});
	res.send(rendered);
})

var port = process.env.PORT ||  3001

app.listen(port, function(){
 console.log("Listening on port 3001")
})

