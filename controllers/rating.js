const models = require('../models')
const Rating = models.rating

exports.addRating = (req, res) => {
    Rating.create(req.body)
    .then(rating => {
        res.send({
            message:"Add New Rating Success!",
            rating,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message:"Add New Rating Fail!",
            err,
            error:true
        })
    })
}

exports.selectAll = (req, res) => {
    Rating.findAll()
    .then(rating => {
        res.send({
            message:"Select Data Rating Success!",
            rating,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message:"Select Data Rating Failure!",
            err,
            error:true
        })
    })
}


exports.selectByID = (req, res) => {
    const parameter = req.params.id
    Rating.findAll({
        where: {id:parameter}
    })
    .then(rating => {
        res.send({
            message:"Select Data Rating Success!",
            rating,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message:"Select Data Rating Failure!",
            err,
            error:true
        })
    })
}

exports.deleteRating = (req, res) => {
    const parameter = req.params.id
    Rating.destroy({
        where:{id:parameter}
    })
    .then(rating => {
        res.send({
            message: "Rating Data Deleted!",
            rating,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Delete Rating Data Failed!",
            err,
            error:true
        })
    })
}

exports.updateByID = (req, res) => {
    const parameter = req.params.id
    Rating.update({
        where: {id:parameter}
    })
    .then(rating => {
        res.send({
            message: "Update Rating Success!",
            rating,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Update Rating Failed!",
            err,
            error:false
        })
    })
}