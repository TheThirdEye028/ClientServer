var express = require('express');
var request = require("request");
var base64 = require('node-base64-image');
var querystring = require('querystring');
var cloudinary = require('cloudinary');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Worker = require('./db/workers').worker;
var fs = require('fs');
var app = express();

var api_key = "7c061fd4eab8115951e52254f489df0c";
var api_secret = "zqg-w5R8mzu7JEiTyAFmTHD2CRRnJ5xH";
var ugliesGrpId = "a5ad4776d0c94cb9ed0e619c411c196f";

mongoose.connect('mongodb://localhost/admin');
var db = mongoose.connection;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({limit: '50mb'}));

// parse application/json
app.use(bodyParser.json({limit: '50mb'}))

app.use('/static',express.static(__dirname + '/employee_client'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/employee_client/views/index.html');
});

cloudinary.config({ 
    cloud_name: 'ddtcf21qj', 
    api_key: '286635888393856', 
    api_secret: 'bGGNM5r5XEeCjFeOduMsdTVRKgU' 
});

app.post('/upload', function(req, res) {
    var name = req.body.name;
    var images = req.body.images;
    var newbie = new Worker({ worker_name: name, images: [], worker_id: "" });
    var index = 0;
    
    images.forEach(function(image) {
        cloudinary.uploader.upload(image, function(result) {
            newbie.images.push(result.url);
            index++;
            
            if (index == images.length) {
                mapFacePP(newbie);
            }
        });
    });
    
    console.log(res);
});

function mapFacePP(worker) {
    var index = 0;
    var facesArr = [];
    worker.images.forEach(function(image) {
        request('https://apius.faceplusplus.com/v2/detection/detect?'
        + 'api_key=' + api_key + '&'
        + 'api_secret=' + api_secret + '&'
        + 'url=' + image, function(err, res, body) {
            var renBody = JSON.parse(body);
            index++;
            if (renBody.face.length == 0) {
                consolge.log("No faces recognized on photo no. " + index);
            } else if (!err) {
                facesArr.push(renBody.face[0].face_id);
                
                if (index == worker.images.length) {
                    createPerson(facesArr, worker);
                }
            }
        });
    })
}

function createPerson(faces, worker) {
    var reqStr = 'https://apius.faceplusplus.com/v2/person/create?'
        + 'api_key=' + api_key + '&'
        + 'api_secret=' + api_secret + '&'
        + 'person_name=' + worker.worker_name + '&'
        + 'group_id=' + ugliesGrpId + '&'
        + 'face_id=';
    faces.forEach(function(face, index) {
        reqStr += face;
        if (index != faces.length - 1) {
            reqStr += ',';
        }
    });
    request(reqStr, function(err, res, body) {
            var renBody = JSON.parse(body);
            worker.worker_id = renBody.person_id;
            worker.save();
            
            // Training the group
            var secReqStr = 'https://apius.faceplusplus.com/v2/person/create?'
                + 'api_key=' + api_key + '&'
                + 'api_secret=' + api_secret + '&'
                + 'group_id=' + ugliesGrpId + '&';
                
            request(secReqStr, function(err, res, body) {
                console.log(body);
            });
        }
    );
    
    console.log(faces);
}

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});