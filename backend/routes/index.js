var express = require('express');
var router = express.Router();
const request = require ('request')
const dataModel = require("../models/restaurant");

const api_url_paris  = `https://api.foursquare.com/v2/venues/explore?&near=Paris&client_id=2ZMTPBXCGV2PP1CS0X5UJ4ZTWIN10HC1KLK5M4JMS0KRP5DR&client_secret=30Q1DHT014WDKXP5B0T2D1DEGMZY2WPQRB1UI2P1EBUILPXM&v=20180323&query=food`;
const api_url_rome  = 'https://api.foursquare.com/v2/venues/explore?&near=Rome&client_id=2ZMTPBXCGV2PP1CS0X5UJ4ZTWIN10HC1KLK5M4JMS0KRP5DR&client_secret=30Q1DHT014WDKXP5B0T2D1DEGMZY2WPQRB1UI2P1EBUILPXM&v=20180323&query=food';
const api_url_madrid  = 'https://api.foursquare.com/v2/venues/explore?&near=Madrid&client_id=2ZMTPBXCGV2PP1CS0X5UJ4ZTWIN10HC1KLK5M4JMS0KRP5DR&client_secret=30Q1DHT014WDKXP5B0T2D1DEGMZY2WPQRB1UI2P1EBUILPXM&v=20180323&query=food';




//Refactorisation //
// router.get("/all", function(req, res, next) {
//   const allCity = ['Paris', 'Rome', 'Madrid'];
//     for(var i = 0 ; i < allCity.length ; i++){
//       request(`https://api.foursquare.com/v2/venues/explore?&near=${allCity[i]}&client_id=2ZMTPBXCGV2PP1CS0X5UJ4ZTWIN10HC1KLK5M4JMS0KRP5DR&client_secret=30Q1DHT014WDKXP5B0T2D1DEGMZY2WPQRB1UI2P1EBUILPXM&v=20180323&query=food`, function(err, response, body) {
//         body = JSON.parse(body);
//         console.log(response , 'testtteee');
//         if(err){
//           res.send(err)
//         }
//         res.json(body);
//     })
//   }
// })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get("/paris", function(req, res, next) {
  request(api_url_paris, function(err, response, body) {
    body = JSON.parse(body);
    if(err){
      res.send(err)
    };
    res.json(body);
  });
});


router.get("/rome", function(req, res, next) {
  request(api_url_rome, function(err, response, body) {
    body = JSON.parse(body);
    if(err){
      res.send(err)
    };
    res.json(body);
  });
});

router.get("/madrid", function(req, res, next) {
  request(api_url_madrid, function(err, response, body) {
    body = JSON.parse(body);
    if(err){
      res.send(err)
    };
    res.json(body);
  });
});


router.post("/save", function(req, res, next) {
  var newData = new dataModel({
    totalResults : req.body.totalResults
  });
  //Sauvegarde ma donnée sur Mlab//
  newData.save(function(err, data) {
    if(err){
      res.send(err)
    };
    res.json({ result: true, data });
  });
});


module.exports = router;

