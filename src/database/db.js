const mongoose = require('mongoose')

function connect() {
    //mongoose.set('useNewUrlParser', true)
    //mongoose.set('useUnifiedTopology', true)

    mongoose.connect('mongodb://127.0.0.1/api-restful')

    const db = mongoose.connection

    db.once('open', () => {
        console.log('Connected to database!')
    })

    db.on('error', console.error.bind(console, 'connection error: '))

}

module.exports = {
    connect
}