const express = require('express')
const repo = require ('./repository')
const response = require ('./response')
const router = express.Router()

router.get('/api/v1/order/:id', findOrder)
function findOrder (req, res){
    let result = repo.findOrder(req.params.id)
    res.send(response.map(result))
}


router.post('/api/v1/order', createOrder) 
function createOrder (req, res){
    const order = req.body
    if(!order.clientMail || !order.date || order.totalPrice === undefined || order.totalPrice < 0){
        res.status(400).send({error: "Faltan campos obligatorios"})
        return
    }
    let result = repo.createOrder(order)  
    res.send(response.map(result))
}


router.put('/api/v1/order/:id', editOrder)
function editOrder (req, res) {
    let result = repo.editOrder(req.params.id, req.body)
    res.send(response.map(result))
}


router.delete('/api/v1/order/:id', deleteOrder)
function deleteOrder (req, res) {
    let result = repo.deleteOrder(req.params.id)
    res.send(response.map(result))
}

module.exports = router