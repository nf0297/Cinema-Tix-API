const models = require('../models')
const Cinema = models.cinema
const Hall = models.hall

exports.addCinema = (req, res) => {
    Cinema.create(req.body)
    .then(cinema => {
        res.send({
            message:"Add New Cinema Success!",
            cinema,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message:"Add New Cinema Fail!",
            err,
            error:true
        })
    })
}

exports.selectAll = (req, res) => {
    Cinema.findAll()
    .then(cinema => {
        res.send({
            message:"Select Data Cinema Success!",
            cinema,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message:"Select Data Cinema Failure!",
            err,
            error:true
        })
    })
}

exports.selectByID = (req, res) => {
    const parameter = req.params.id
    Cinema.findAll({
        where: {id:parameter},
        include: 
        [
            {
                model:Hall, as:"Halls", attributes:["number","time"]
            }
        ]
    })
    .then(cinema => {
        res.send({
            message:"Select Data Cinema Success!",
            cinema,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message:"Select Data Cinema Failure!",
            err,
            error:true
        })
    })
}

exports.deleteCinema = (req, res) => {
    const parameter = req.params.id
    Cinema.update({
        where: {id:parameter},
    })
    .then(cinema => {
        res.send({
            message:"Delete Data Cinema Success!",
            cinema,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message:"Delete Data Cinema Failure!",
            err,
            error:true
        })
    })
}


exports.updateByID = (req, res) => {
    const parameter = req.params.id
    Cinema.update({
        where: {id:parameter}
    })
    .then(cinema => {
        res.send({
            message: "Update Cinema Success!",
            cinema,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Update Cinema Failed!",
            err,
            error:false
        })
    })
}