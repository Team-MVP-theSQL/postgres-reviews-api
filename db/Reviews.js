let mongoose = require('mongoose');

let reviewsSchema = new mongoose.Schema({
  shoeId: Number,
  nickname: String,
  location: String,
  title: String,
  body: String,
  photos: [{type: String}],
  pros: [{type: String}],
  cons: [{type: String}],
  recommended: Boolean,
  overallRating: Number,
  qualityRating: Number,
  valueRating: Number,
  timeCreated: String,
});

let Reviews = mongoose.model('Reviews', reviewsSchema);

module.exports = Reviews;