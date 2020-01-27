const models = require('../models')
const Ticket = models.ticket

exports.createTicket = (req, res) => {
    Ticket.create(req.body)
    .then(ticket => {
        res.send({
            message:"Create New Ticket Success!",
            ticket,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message:"Create New Ticket Fail!",
            err,
            error:true
        })
    })
}

exports.selectAll = (req, res) => {
    Ticket.findAll()
    .then(ticket => {
        res.send({
            message:"Select Data Ticket Success!",
            ticket,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message:"Select Data Ticket Failure!",
            err,
            error:true
        })
    })
}

exports.selectByID = (req, res) => {
    const parameter = req.params.id
    Ticket.findAll({
        where: {id:parameter}
    })
    .then(ticket => {
        res.send({
            message:"Select Data Ticket Success!",
            ticket,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message:"Select Data Ticket Failure!",
            err,
            error:true
        })
    })
}

exports.deleteTicket = (req, res) => {
    const parameter = req.params.id
    Ticket.destroy({
        where:{id:parameter}
    })
    .then(ticket => {
        res.send({
            message: "Ticket Data Deleted!",
            ticket,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Delete Ticket Data Failed!",
            err,
            error:true
        })
    })
}

exports.updateByID = (req, res) => {
    const parameter = req.params.id
    Ticket.update({
        where: {id:parameter}
    })
    .then(ticket => {
        res.send({
            message: "Update Ticket Success!",
            ticket,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Update Ticket Failed!",
            err,
            error:false
        })
    })
}