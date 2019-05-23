const mongoose = require('mongoose');

const rateSchema = new mongoose.Schema({
  rating: {type: Number, required: true, min: 1, max:5},
  comment: {type: String}
})

const cakeSchema = new mongoose.Schema({
  bakerName: {type: String},
  url: {type: String},
  rating: [rateSchema]
},{timestamp:true});

module.exports =mongoose.model('Cake', cakeSchema);
var Cake = mongoose.model('Cake');
