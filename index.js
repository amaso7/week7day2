const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const cors = require('cors')
const tripRte = require('./display/trips.js')



app.engine('mustache', mustacheExpress())

app.set('views', './views')

app.set('view engine', 'mustache')

app.use(express.static('public'))
app.use(express.urlencoded())
app.use('HTTP://localhost:3000/trip', tripRte)

app.listen(3000, ()=>{
    console.log('Server is running...')
})