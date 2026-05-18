const express = require('express')
const app = express()
const port = 3000
const router = express.Router()
const cors = require('cors')

app.use(cors())
app.use(express.json())

var apiRoute = router.route('/api/v1')
  , productRoutes = require('./product/product')

app.use('/api/v1/product', productRoutes)

app.listen(port, () => {
  console.log(`TikiTaka e-commerce listening ${port}`)
})

module.exports = app



