var mongoose = require('mongoose');
var schema = mongoose.schema;
var workerSchema = mongoose.Schema({
    worker_name : String,
    images      : [ String ],
    worker_id   : String
});

var worker = mongoose.model("worker", workerSchema);
module.exports.worker = worker;