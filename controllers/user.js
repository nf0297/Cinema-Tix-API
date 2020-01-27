const jwt = require('jsonwebtoken')
const models = require('../models')
const User = models.users
const Ticket = models.ticket
const Movie = models.movie
const Seat = models.seat
const Hall = models.hall
const Cinema = models.cinema
const Genre = models.genre
const Rating = models.rating

exports.createAccount = (req, res) => {
    User.create(req.body)
    .then(user => {
        const token = jwt.sign({ id: user.id }, 'Cinema-Tix');
        const username = user.username;
        const id = user.id;
        const name = user.fullname;
        res.send ({
            message: "Create Account Success!",
            id,
            username,
            name,
            token,
        });
    })
    .catch(err => res.send(err))
};

exports.selectAll = (req, res) => {
    User.findAll({
        attributes:["id", "fullname", "image", "email", "username", "password"]
    })
    .then(users => {
        res.send({
            message: "User Data Selected",
            users,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Cannot Select User Data! Please Fix Your Syntax",
            err,
            error:true
        })
    })
}

exports.selectByID = (req, res) => {
    const parameter = req.params.id
    User.findAll({
        where: {id:parameter}, attributes:["id", "fullname", "image", "email", "username", "password"],
        include:
        [
            {
                model:Ticket, as:"Ticket", attributes:["price", ["createdAt", "BoughtAt"]], 
                include: 
                [
                    {
                        model:Movie, as:"Movie", attributes:["title"],
                        include:
                        [
                            {
                                model:Genre, as:"Genre", attributes:["name"]
                            },
                            {
                                model:Rating, as:"AgeRating", attributes:["initial", "meaning"]
                            }
                        ],
                    },
                    {
                        model:Seat, as:"atSeat", attributes:["number"],
                        include: 
                        [
                            {
                                model:Hall, as:"atHall", attributes:["number", "time"],
                                include:
                                [
                                    {
                                        model:Cinema, as:"onCinema", attributes:["name", "location","urllocation"]
                                    }
                                ]
                            }
                        ],
                    },
                ],
            }
        ],
    })
    .then(User => {
        res.send({
            message: "User Data Selected!",
            User,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Cannot Select User Data! Please Fix Your Syntax",
            err,
            error:true
        })
    })
}

exports.deleteAccount = (req, res) => {
    const parameter = req.params.id
    User.destroy({
        where:{id:parameter}
    })
    .then(user => {
        res.send({
            message: "User Data Deleted!",
            user,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Delete User Data Failed!",
            err,
            error:true
        })
    })
}

exports.updateByID = (req, res) => {
    const parameter = req.params.id
    User.update({
        where: {id:parameter}
    })
    .then(user => {
        res.send({
            message: "Update User Data Success!",
            user,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Update User Data Failed!",
            err,
            error:true
        })
    })
}