var express = require('express');
var request = require("request");
var base64 = require('node-base64-image');
var querystring = require('querystring');
var app = express();

app.use('/static',express.static(__dirname + '/employee_client'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/employee_client/views/index.html');
});

// app.get('/', function (req, res) {
//     res.send('Hello World!');

    // base64.encode("/home/toml/Desktop/kadurglasses.jpg", { string: 'true', local: 'true' }, function(err, kaiRes) {
    //     //console.log(res);
        
    //     var options = {
    //         method: 'POST',
    //         url: 'https://api.kairos.com/enroll',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'app_id': 'b12c99bb',
    //             'app_key': '75dd6d6b456cbff2f0781b45dcafa09f'
    //         },
    //         body: JSON.stringify({
    //             "image": kaiRes,
    //             "subject_id": "Kadur",
    //             "gallery_name": "beauties"
    //         })
    //     };
        
    //     request(options, function (err, res, body) {
    //         if (!err) {
    //             var resultsObj = JSON.parse(body);
    //             //Just an example of how to access properties:
    //             console.log(resultsObj.MRData);
    //         }
    //     });
    // });
    
    // base64.encode("/home/toml/Desktop/kadurglasses.jpg", { string: 'true', local: 'true' }, function(err, kaiRes) {
    //     //console.log(res);
        
    //     var options = {
    //         method: 'POST',
    //         url: 'https://api.kairos.com/recognize',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'app_id': 'b12c99bb',
    //             'app_key': '75dd6d6b456cbff2f0781b45dcafa09f'
    //         },
    //         body: JSON.stringify({
    //             "image": kaiRes,
    //             //"subject_id": "Langer",
    //             "gallery_name": "beauties"
    //             //"symmetricFill": "true",
    //             //"selector": "SETPOSE"
    //         })
    //     };
        
    //     request(options, function (err, res, body) {
    //         if (!err) {
    //             var resultsObj = JSON.parse(body);
    //             //Just an example of how to access properties:
    //             console.log(resultsObj.MRData);
    //         }
    //     });
    // });
//});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});