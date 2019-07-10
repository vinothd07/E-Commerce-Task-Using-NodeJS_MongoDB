var MongoDB = require('mongodb').MongoClient;

var CurrentState = {
    db: null,
}

exports.connect = function (host, dbName, success) {
    if (CurrentState.db) return success();

    MongoDB.connect(host, { useNewUrlParser: true }, function (err, client) {
        if (err) return success(err)
        var db = client.db(dbName);
        CurrentState.db = db
        success()
    })
}

exports.get = function () {
    return CurrentState.db
}

exports.close = function (success) {
    if (CurrentState.db) {
        CurrentState.db.close(function (err, result) {
            CurrentState.db = null
            CurrentState.mode = null
            success(err)
        })
    }
}