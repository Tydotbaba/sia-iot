// Full Documentation - https://www.turbo360.co/docs
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})

const app = vertex.express() // initialize app


// import routes
const index = require('./routes/index')

// set routes
app.use('/', index)


module.exports = app