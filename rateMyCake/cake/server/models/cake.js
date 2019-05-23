const mongoose = require('mongoose');
const {Schema} = mongoose;

const rateSchema = new mongoose.Schema({
  cake: { type: Schema.Types.ObjectId, ref: 'Cake', required: true},
  rating: {type: Number, required: true, min: 1, max:5},
  comment: {type: String}
})

const cakeSchema = new mongoose.Schema({
  bakerName: {type: String},
  url: {type: String},
  rating: [{
    type: Schema.Types.ObjectId,
    ref: 'Rating'
  }]
},{timestamp:true});

module.exports.Cake =mongoose.model('Cake', cakeSchema);
module.exports.Rating = mongoose.model('Rating', rateSchema);
