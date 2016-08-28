var express = require('express');
var request = require("request");
var base64 = require('node-base64-image');
var querystring = require('querystring');
var cloudinary = require('cloudinary');
var fs = require('fs');
var app = express();

// cloudinary.config({ 
//     cloud_name: 'ddtcf21qj', 
//     api_key: '286635888393856', 
//     api_secret: 'bGGNM5r5XEeCjFeOduMsdTVRKgU' 
// });

// cloudinary.uploader.upload("/home/toml/Desktop/kaduri.jpg", function(result) { 
//     console.log(result) 
// });

// app.use('/static',express.static(__dirname + '/employee_client'));

// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/employee_client/views/index.html');
// });

// app.get('/', function(req,res) {
//     var img = fs.readFileSync('./public/pictures/kaduri.jpg');
    
//     res.writeHead(200, {'Content-Type': 'image/gif' });
//     res.end(img, 'binary');
// });

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
    //var source = fs.createReadStream("/home/toml/Desktop/kadurglasses.jpg");
var options = {
    method: 'POST',
    url: 'https://apius.faceplusplus.com/detection/detect?url=http://res.cloudinary.com/ddtcf21qj/image/upload/v1472395399/oygdfddywxuq3e7q4k2x.jpg&api_key=7c061fd4eab8115951e52254f489df0c&api_secret=MkXK5FbSrEzjtj42HMdb-HStG_ainWdq'
};

request(options, function (err, res, body) {
    if (!err) {
        var resultsObj = JSON.parse(body);
        //Just an example of how to access properties:
        console.log(resultsObj.MRData);
    }
});

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });