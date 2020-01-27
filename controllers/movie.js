const models = require('../models')
const Movie = models.movie

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
    Movie.findAll()
    .then(movie => {
        res.send({
            message:"Select Data Movie Success!",
            movie,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message:"Select Data Movie Failure!",
            err,
            error:true
        })
    })
}


exports.selectByID = (req, res) => {
    const parameter = req.params.id
    Movie.findOne({
        where: {id:parameter}
    })
    .then(movie => {
        res.send({
            message:"Select Data Movie Success!",
            movie,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message:"Select Data Movie Failure!",
            err,
            error:true
        })
    })
}

exports.deleteMovie = (req, res) => {
    const parameter = req.params.id
    Movie.destroy({
        where:{id:parameter}
    })
    .then(movie => {
        res.send({
            message: "Movie Data Deleted!",
            movie,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Delete Movie Data Failed!",
            err,
            error:true
        })
    })
}

exports.updateByID = (req, res) => {
    const parameter = req.params.id
    Movie.update({
        where: {id:parameter}
    })
    .then(movie => {
        res.send({
            message: "Update Movie Success!",
            movie,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Update Movie Failed!",
            err,
            error:false
        })
    })
}