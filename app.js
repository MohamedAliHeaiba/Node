var http = require("http");
var express = require("express");
var url = require("url");
var fs = require("fs");
var bodyParser = require("body-parser");
var util = require("util");
var path = require("path");
var app = express();

app.use(bodyParser.json)
app.use(bodyParser.urlencoded({ extended: true }))


http.createServer(app);
app.listen(3000, function () {
    console.log("Listening .......")
});

app.get("/", function (request, respons) {

    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;
    fs.readFile("Temp.html", function (err, data) {
        if (err) {
            console.log(`I Can't read this file ${err}`);
        } else {
            //respons.send(` ${data} `);
            // respons.sendFile(path.join(__dirname, "Temp.html"));
            respons.render("myTemplate.ejs", { Name: "Mohamed Ali heaiba", arr: [1, 2, 3, 4] });
        }
    })

});


app.post("/sendEmail", function (request, respons) {
    console.log(request.body.name);
    sRes.send(`${util.format('%J', sReq.body)}`);
});
