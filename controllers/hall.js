const models = require('../models')
const Cinema = models.cinema
const Hall = models.hall

exports.bookHall = (req, res) => {
    Hall.create(req.body)
    .then(hall => {
        res.send({
            message:"Book Hall Success!",
            hall,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message:"Book Hall Fail!",
            err,
            error:true
        })
    })
}

exports.selectAll = (req, res) => {
    Hall.findAll()
    .then(hall => {
        res.send({
            message:"Select Data Hall Success!",
            hall,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message:"Select Data Hall Failure!",
            err,
            error:true
        })
    })
}


exports.selectByID = (req, res) => {
    const parameter = req.params.id
    Hall.findAll({
        where: {id:parameter}
    })
    .then(hall => {
        res.send({
            message:"Select Data Hall Success!",
            hall,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message:"Select Data Hall Failure!",
            err,
            error:true
        })
    })
}

exports.deleteHall = (req, res) => {
    const parameter = req.params.id
    Hall.destroy({
        where:{id:parameter}
    })
    .then(hall => {
        res.send({
            message: "Hall Data Deleted!",
            hall,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Delete Hall Data Failed!",
            err,
            error:true
        })
    })
}


exports.updateByID = (req, res) => {
    const parameter = req.params.id
    Hall.update({
        where: {id:parameter}
    })
    .then(hall => {
        res.send({
            message: "Update Hall Success!",
            hall,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Update Hall Failed!",
            err,
            error:false
        })
    })
}