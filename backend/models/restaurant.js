const mongoose = require('mongoose');


// Here, we just need to define a movie schema
const restaurantSchema = mongoose.Schema({
    name: String,
    plurialName: String,
    formattedAddress: String,
    
  });

const restaurantModel = mongoose.model('restaurants', restaurantSchema);

module.exports = restaurantModel;
