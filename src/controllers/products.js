const ProductModel = require('../models/products')


async function get(req, res) {
const products = await ProductModel.find()

res.send(products)
}

module.exports = {
    get
}