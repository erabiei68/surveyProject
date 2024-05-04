const express = require('express')
const createSurvey = require('../controllers/surveyControllers')

const router = express.Router();

//GET a single survey
//router.get('/:id', getSurvey)

// POST a new survey
router.post('/', createSurvey)

module.exports = router;