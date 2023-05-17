const express = require('express')
const cors = require('cors')

const db = require('./database/db')
const routes = require('./routes/routes')


const app = express()

//Connecting the database
db.connect()

const allowedOrigins = [
    'http://127.0.0.1:5500',
    'http://www.appi.com.br',
]

//Habilita CORS
app.use(cors({
    origin: function (origin, callback) {
        let allowed = true

        //mobile app
        if (!origin) allowed = true

        if (!allowedOrigins.includes(origin)) allowed = false

        callback(null, allowed)
    }
}))

//Habilita server para receber dados json
app.use(express.json())

//Defining the routes
app.use('/api', routes)

//Server execution
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))