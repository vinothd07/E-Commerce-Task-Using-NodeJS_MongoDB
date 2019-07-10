"use strict";
var db = require("./../config/db-config");
function getAllCategoryList(cb) {
    var collection = db.get().collection('categories')
    collection.aggregate([
        {
            $lookup:
            {
                from: "products",
                localField: "category_id",
                foreignField: "category_id",
                as: "products"
            }
        },
        {
            $project:
            {
                "category_id": 1,
                "category_name": 1,
                "noOfProducts": { $size: "$products" },
                "products": {
                    "product_id": 1,
                    "brand_name": 1,
                    "model_no": 1,
                    "price": 1
                }
            }
        }
    ]).toArray(function (err, result) {
        if (err) throw err;
        cb(err, result)
    })
}

module.exports = {
    getAllCategoryList: getAllCategoryList
}

