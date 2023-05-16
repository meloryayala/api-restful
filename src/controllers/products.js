const ProductModel = require('../models/products')


async function get(req, res) {
    const { id } = req.params  //req.query => ?id=123 //req.body => post

    const obj = id ? { _id: id } : null
    
    // if (id) {
    //     obj._id = id
    // }
    
    const products = await ProductModel.find(obj)

    res.send(products)
}



module.exports = {
    get
}