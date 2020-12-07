const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./index');

const Review = db.define('review', {
  shoeid: {
    type: DataTypes.INTEGER
  },
  nickname: {
    type: DataTypes.STRING
  },
  location: {
    type: DataTypes.STRING
  },
  title: {
    type: DataTypes.STRING
  },
  body: {
    type: DataTypes.STRING
  },
  photos: {
    type: DataTypes.ARRAY(DataTypes.STRING)
  },
  pros: {
    type: DataTypes.ARRAY(DataTypes.STRING)
  },
  cons: {
    type: DataTypes.ARRAY(DataTypes.STRING)
  },
  recommended: {
    type: DataTypes.BOOLEAN
  },
  overallrating: {
    type: DataTypes.FLOAT(11)
  },
  qualityrating: {
    type: DataTypes.FLOAT(11)
  },
  valuerating: {
    type: DataTypes.FLOAT(11)
  },
  timecreated: {
    type: DataTypes.STRING
  },
}, {
  timestamps: false
}

);

module.exports = Review;