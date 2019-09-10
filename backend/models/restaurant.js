const mongoose = require('mongoose');


// Here, we just need to define a movie schema
const dataSchema = mongoose.Schema({
   totalResults : Number
  });

const dataModel = mongoose.model('datas', dataSchema);

module.exports = dataModel;
