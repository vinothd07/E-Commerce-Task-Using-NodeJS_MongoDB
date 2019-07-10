"use strict";
var express = require("express"),
    path = require("path");

module.exports = function () {
    var app = express();
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');
    require("./../routes/categories.routes")(app);
    return app;
};

