//init express group route for routing
require('express-group-routes');
//init body parser for parsing body to req.body
const bodyParser = require('body-parser');
//init express module
const express = require('express');
//use express in app variable
const app = express();
//define the server port
const port = process.env.PORT || 5000

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
  });

//import controllers
const auth = require('./controllers/auth')
const user = require('./controllers/user')
const genre = require('./controllers/genre')
const rating = require('./controllers/rating')
const movie = require('./controllers/movie')
const cinema = require('./controllers/cinema')
const hall = require('./controllers/hall')
const seat = require('./controllers/seat')
const ticket = require('./controllers/ticket')

//create home route
app.get("/", (req, res) => {
    //res means response which send "Welcome" to the API
    res.send("Welcome, Cinema-Tix");
});

app.group("/api/v1", (router) => {
    //login register
    router.post('auth/login', auth.login)

    //user
    router.post('/user/register', user.createAccount)
    router.get('/users', user.selectAll)
    router.get('/user/:id/data', user.selectByID)
    router.delete('/user/:id/delete', user.deleteAccount)
    router.put('/user/:id/update', user.updateByID)

    //genre
    router.get('/genres', genre.selectAll)
    router.post('/genre/create', genre.createGenre)
    router.get('/genre/:id/data', genre.selectByID)
    router.delete('/genre/:id/delete', genre.deleteGenre)
    router.put('/genre/:id/update', genre.updateByID)

    //rating
    router.get('/ratings', rating.selectAll)
    router.post('/rating/create', rating.addRating)
    router.get('/rating/:id/data', rating.selectByID)
    router.delete('/rating/:id/delete', rating.deleteRating)
    router.put('/rating/:id/update', rating.updateByID)

    //movie
    router.get('/movies', movie.selectAll)
    router.post('/movie/create', movie.postMovie)
    router.get('/movie/:id/data', movie.selectByID)
    router.delete('/movie/:id/delete', movie.deleteMovie)
    router.put('/movie/:id/update', movie.updateByID)

    //cinema
    router.get('/cinemas', cinema.selectAll)
    router.post('/cinema/create', cinema.addCinema)
    router.get('/cinema/:id/data', cinema.selectByID)
    router.delete('/cinema/:id/delete', cinema.deleteCinema)
    router.put('/cinema/:id/update', cinema.updateByID)

    //hall
    router.get('/halls', hall.selectAll)
    router.post('/hall/create', hall.bookHall)
    router.get('/hall/:id/data', hall.selectByID)
    router.delete('/hall/:id/delete', hall.deleteHall)
    router.put('/hall/:id/update', hall.updateByID)

    //seat
    router.get('/seats', seat.selectAll)
    router.post('/seat/create', seat.bookSeat)
    router.get('/seat/:id/data', seat.selectByID)
    router.delete('/seat/:id/delete', seat.deleteSeat)
    router.put('/seat/:id/update', seat.updateByID)

    //ticket
    router.get('/tickets', ticket.selectAll)
    router.post('/ticket/create', ticket.createTicket)
    router.get('/ticket/:id/data', ticket.selectByID)
    router.delete('/ticket/:id/delete', ticket.deleteTicket)
    router.put('/ticket/:id/update', ticket.updateByID)
})



//when this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(`Listening on port ${port}!`))