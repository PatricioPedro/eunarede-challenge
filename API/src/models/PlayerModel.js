const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
  name: String,
  gols: Number,
  team: String
})

module.exports = mongoose.model('Player', playerSchema)
