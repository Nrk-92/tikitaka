const express = require('express')
const repo = require ('./repository')
const response = require ('./response')
const router = express.Router()

router.get('/:id', findProduct)
function findProduct (req, res){
    let result = repo.findProduct(req.params.id)
    res.send(response.map(result))
}

router.get('/', findAll)
function findAll (req, res){
    let result = repo.findAll(req.params.id)
    res.send(response.map(result))
}

router.post('/', createProduct) 
function createProduct (req, res){
    const product = req.body
    if(!product.name || !product.price || !product.image || product.stock === undefined){
        res.status(400).send({error: "Faltan campos obligatorios"})
        return
    }
    let result = repo.createProduct(product)
    res.send(response.map(result))
}

router.put('/:id', editProduct)
function editProduct (req, res) {
    let result = repo.editProduct(req.params.id, req.body)
    res.send(response.map(result))
}

router.delete('/:id', deleteProduct)
function deleteProduct (req, res) {
    let result = repo.deleteProduct(req.params.id)
    res.send(response.map(result))
}

module.exports = router