"use strict";
var express = require("./config/express");
var app = express();
var db = require('./config/db-config');
const host = "mongodb://localhost", dbName = "vinothDB";

// Connect to Mongo server on start
db.connect(host, dbName, function (err) {
    if (err) {
        console.log('Unable to connect to Mongo.')
        process.exit(1)
    } else {
        var server = app.listen(3000, '0.0.0.0', function () {
            console.log("Server running on port 3000..!!");
        });
    }
})


