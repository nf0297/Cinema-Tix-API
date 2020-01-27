const models = require('../models')
const Genre = models.genre
const Movie = models.movie
const Rating = models.rating

exports.createGenre = (req, res) => {
    Genre.create(req.body)
    .then(genre => {
        res.send({
            message:"Create New Genre Success!",
            genre,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message:"Create New Genre Fail!",
            err,
            error:true
        })
    })
}

exports.selectAll = (req, res) => {
    Genre.findAll({
        include: 
        [
            {
                model:Movie, as:"Movies", attributes:["title", "image", "startdate", "enddate", "duration"],
                include: 
                [
                    {
                        model:Rating, as:"AgeRating", attributes:["initial", "meaning"]
                    }
                ]
            }
        ]
    })
    .then(genre => {
        res.send({
            message: "Genre Selected Successfully!",
            genre,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Select Genre Failure!",
            err,
            error:true
        })
    })
}


exports.selectByID = (req, res) => {
    const parameter = req.params.id
    Genre.findAll({
        where: {id:parameter}
    })
    .then(genre => {
        res.send({
            message:"Select Data Genre Success!",
            genre,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message:"Select Data Genre Failure!",
            err,
            error:true
        })
    })
}

exports.deleteGenre = (req, res) => {
    const parameter = req.params.id
    Genre.destroy({
        where:{id:parameter}
    })
    .then(genre => {
        res.send({
            message: "Genre Data Deleted!",
            genre,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Delete Genre Data Failed!",
            err,
            error:true
        })
    })
}

exports.updateByID = (req, res) => {
    const parameter = req.params.id
    Genre.update({
        where: {id:parameter}
    })
    .then(genre => {
        res.send({
            message: "Update Genre Success!",
            genre,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Update Genre Failed!",
            err,
            error:false
        })
    })
}