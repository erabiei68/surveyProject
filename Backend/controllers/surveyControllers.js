const Survey = require('../models/surveyModel')
const mongoose = require('mongoose')

// create a new workout
const createSurvey = async (req, res) => {
    //const {title, load, reps} = req.body
    //console.log(req.body)
    // add to the database
    try {
      const survey = await Survey.create(req.body)
      res.status(200).json(survey)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  module.exports = createSurvey