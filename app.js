const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const cors = require('cors')
const tripRte = require('./trip/trips')


require("./trip/trips")
app.engine('mustache', mustacheExpress())

app.set('views', './views')

app.set('view engine', 'mustache')

app.use(express.static('public'))
app.use(express.urlencoded())
app.get('/trip', tripRte)
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.listen(3000, ()=>{
    console.log('Server is running...')
})
app.get('/addTrip', (req,res) => {
    res.render('addTrip')
})