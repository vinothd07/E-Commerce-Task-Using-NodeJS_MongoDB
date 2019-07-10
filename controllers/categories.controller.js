"use strict";
var categoryModel = require("./../models/categories.model");

exports.Home = function (req, res) {
	categoryModel.getAllCategoryList(function (err, result) {
        if (err) res.send(err);
        res.render('index.ejs', { categories: result })
	});
};

exports.getAllCategoryList = function (req, res) {
	categoryModel.getAllCategoryList(function (err, result) {
        if (err) res.send(err);
        res.send(result);
	});
};

