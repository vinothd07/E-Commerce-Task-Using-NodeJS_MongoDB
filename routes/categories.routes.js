"use strict";
var categories = require("./../controllers/categories.controller");
module.exports = function (app) {
    app.get('/', categories.Home);
    app.get('/api/categories', categories.getAllCategoryList);
}
