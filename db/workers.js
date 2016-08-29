var mongoose = require('mongoose');
var schema = mongoose.schema;
var workerSchema = mongoose.Schema({
    id          : String,
    worker_name : String,
    images      : [ String ],
    posts       : [ String ],
    worker_id   : String,
    age         : Number
});

var worker = mongoose.model("worker", workerSchema);
module.exports.worker = worker;