const express = require('express')
const router = express.Router()

const repo = require ('./repository')
const response = require ('./response')

router.get('/api/v1/analytics/most-profitable-products', findMostProfitableProducts)
function findMostProfitableProducts (req, res){
    let products = repo.findMostProfitableProducts()
    res.send(response.mapAnalytics(products))
}

module.exports = router