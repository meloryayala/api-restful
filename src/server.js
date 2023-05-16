const express = require('express')
//const path = require('path')


const db = require('./database/db')
const routes = require('./routes/routes')


const app = express()

//Connecting the database
db.connect()

//Habilita server para receber dados json
app.use(express.json())

//Defining the routes
app.use('/api', routes)

//Server execution
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))