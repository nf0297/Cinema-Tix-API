const models = require('../models')
const Seat = models.seat

exports.bookSeat = (req, res) => {
    Seat.create(req.body)
    .then(seat => {
        res.send({
            message:"Book Seat Success!",
            seat,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message:"Book Seat Fail!",
            err,
            error:true
        })
    })
}

exports.selectAll = (req, res) => {
    Seat.findAll()
    .then(seat => {
        res.send({
            message:"Select Data Seat Success!",
            seat,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message:"Select Data Seat Failure!",
            err,
            error:true
        })
    })
}


exports.selectByID = (req, res) => {
    const parameter = req.params.id
    Seat.findOne({
        where: {id:parameter}
    })
    .then(seat => {
        res.send({
            message:"Select Data Seat Success!",
            seat,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message:"Select Data Seat Failure!",
            err,
            error:true
        })
    })
}

exports.deleteSeat = (req, res) => {
    const parameter = req.params.id
    Seat.destroy({
        where:{id:parameter}
    })
    .then(seat => {
        res.send({
            message: "Seat Data Deleted!",
            seat,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Delete Seat Data Failed!",
            err,
            error:true
        })
    })
}

exports.updateByID = (req, res) => {
    const parameter = req.params.id
    Seat.update({
        where: {id:parameter}
    })
    .then(seat => {
        res.send({
            message: "Update Seat Success!",
            seat,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Update Seat Failed!",
            err,
            error:false
        })
    })
}