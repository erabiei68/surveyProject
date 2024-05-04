const mongoose = require('mongoose')

const Schema = mongoose.Schema

const surveySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Survey', surveySchema)