const models = require('../models')
const Movie = models.movie
const Genre = models.genre
const Rating = models.rating

exports.postMovie = (req, res) => {
    Movie.create(req.body)
    .then(movie => {
        res.send({
            message:"Post New Movie Success!",
            movie,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message:"Post New Movie Fail!",
            err,
            error:true
        })
    })
}


exports.selectAll = (req, res) => {
    Movie.findAll({
        include: [
            {
                model: Genre, as: "Genre"
            },
            {
                model: Rating, as: "AgeRating"
            }
        ]
    })
    .then(movie => res.send(movie))
    .catch(err => res.send(err))
}


exports.selectByID = (req, res) => {
    const parameter = req.params.id
    Movie.findAll({
        where: {id:parameter},
         include: [
            {
                model: Genre, as: "Genre"
            },
            {
                model: Rating, as: "AgeRating"
            }
        ]
    })
    .then(movie => res.send(movie))
    .catch(err => res.send(err))
}

exports.deleteMovie = (req, res) => {
    const parameter = req.params.id
    Movie.destroy({
        where:{id:parameter}
    })
    .then(movie => res.send(movie))
    .catch(err => res.send(err))
}

exports.updateByID = (req, res) => {
    const parameter = req.params.id
    Movie.update({
        where: {id:parameter}
    })
    .then(movie => res.send(movie))
    .catch(err => res.send(err))
}
