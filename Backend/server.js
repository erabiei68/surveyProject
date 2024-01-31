const express = require('express')

require('dotenv').config()

const surveyRouter = require('./routes/surveysRoute')

const app = express();

app.use(express.json())

app.use('api/surveys/', surveyRouter)

app.listen(process.env.PORT, ()=>{
    console.log('listening started')
})