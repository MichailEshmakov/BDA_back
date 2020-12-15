const { Schema, model } = require('mongoose');

const schema = new Schema({
  playerName: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    default: 0
  }
})

module.exports = model('ScoreLine', schema);