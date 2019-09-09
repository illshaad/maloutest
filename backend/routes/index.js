var express = require('express');
var router = express.Router();
const request = require('request');
const restaurantModel = require("../models/restaurant");
const api_url  = 'https://api.foursquare.com/v2/venues/explore?client_id=2ZMTPBXCGV2PP1CS0X5UJ4ZTWIN10HC1KLK5M4JMS0KRP5DR&client_secret=30Q1DHT014WDKXP5B0T2D1DEGMZY2WPQRB1UI2P1EBUILPXM&v=20180323&limit=5&ll=48.856614,2.3522219'


router.get("/first", function(req, res, next) {
  request(api_url, function(err, response, body) {
    body = JSON.parse(body);
    console.log(body, "Mes donnés reçu");
    res.json(body);
  });
});

router.post("/save", function(req, res, next) {
  console.log("test", req.body);
  var newData = new restaurantModel({
    name: req.body.response.items[1],
    formattedAddress : req.body.response.items[2],
    plurialName: req.body.response.categories[2],
  });
  //Sauvegarde ma donnée sur Mlab//
  console.log("sauvegarde mes restaurant");
  newData.save(function(error, data) {
    res.json({ result: true, data });
  });
});


module.exports = router;
