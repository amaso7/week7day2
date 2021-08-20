const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const Trip = require("../trip/app")

const router = express.Router()


app.engine('mustache',mustacheExpress())

app.set('views','/views')

app.set('view engine','mustache')


let trips = []
let deletedTrips = []

console.log("TRIPS")

router.get('/addTrip', (req,res) => {
    res.render('addTrip')
})

router.post('/addTrip', (req, res) => {
    let title = req.body.title
    let beginDate = req.body.beginDate
    let endDate = req.body.endDate
    let currentTime = Date.now()
    let randomInt = Math.floor((Math.random() * 1000000000))
    let tripId = currentTime.toString() + randomInt.toString()
    let tripInfo = new Trip(title, beginDate, endDate)
    let trip = {tripId: tripId, tripInfo: tripInfo}
    trips.push(trip)
    res.redirect('./views')
})

router.post('/deletetrip', (req, res) => {
    let tripId = req.body.tripId
    deletedTrips.push(tripId)
    res.render(trip)

})

router.get('/views', (req,res) => {
    let filteredTrips = []
    trips.forEach((trip) => {
        if(deletedTrips.includes(trip.tripId))
        filteredTrips.push(trip)
    })
    res.render('views', {trips: filteredTrips})
})
module.exports = router